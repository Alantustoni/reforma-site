'use strict';

// O projeto funciona como interface acadêmica. Nenhum dado de formulário é enviado.
document.querySelectorAll('[data-js-submit]').forEach(button => { button.disabled = false; });

const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const searchForm = document.querySelector('#busca');
if (searchForm) {
  const cards = [...document.querySelectorAll('[data-material]')];
  const query = document.querySelector('#termo');
  const category = document.querySelector('#categoria');
  const locationSelect = document.querySelector('#bairro');
  const applyFilters = () => {
    const words = normalize(query.value).split(/\s+/).filter(Boolean);
    let count = 0;
    cards.forEach(card => {
      const matches = words.every(word => normalize(card.dataset.search).includes(word)) &&
        (!category.value || card.dataset.category === category.value) &&
        (!locationSelect.value || card.dataset.location === locationSelect.value);
      card.hidden = !matches;
      if (matches) count++;
    });
    document.querySelector('#contador').textContent = `${count} ${count === 1 ? 'anúncio de demonstração' : 'anúncios de demonstração'}`;
    document.querySelector('#sem-resultados').hidden = count !== 0;
  };
  searchForm.addEventListener('submit', event => { event.preventDefault(); applyFilters(); });
  document.querySelector('#limpar-busca').addEventListener('click', () => { searchForm.reset(); applyFilters(); query.focus(); });
  const initialCategory = new URLSearchParams(location.search).get('categoria');
  if ([...category.options].some(option => option.value === initialCategory)) { category.value = initialCategory; applyFilters(); }
}

const donationForm = document.querySelector('#doacao');
if (donationForm) donationForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!donationForm.reportValidity()) return;
  const values = new FormData(donationForm);
  const preview = document.querySelector('#previa-doacao');
  preview.replaceChildren();
  const heading = document.createElement('h3');
  heading.textContent = `Prévia: ${values.get('material')}`;
  const details = document.createElement('p');
  details.textContent = `${values.get('quantidade')} ${values.get('unidade')} · ${values.get('categoria')} · ${values.get('estado')} · ${values.get('bairro')}, São Paulo`;
  const description = document.createElement('p');
  description.textContent = values.get('descricao');
  const notice = document.createElement('p');
  notice.textContent = 'Doação gratuita. Esta prévia não foi publicada nem salva. Ao sair da página, ela será descartada.';
  preview.append(heading, details, description, notice);
  preview.hidden = false;
});

// ---------------------------------------------------------------------------
// Formulário de contato: validação em JavaScript + rascunho no localStorage
// ---------------------------------------------------------------------------
const contactForm = document.querySelector('#contato');
if (contactForm) {
  const CHAVE_RASCUNHO = 'reforma-contato-rascunho';
  const status = document.querySelector('#contato-status');

  // Com JavaScript ativo, desligamos os balões nativos do navegador para exibir
  // as nossas mensagens. Sem JavaScript, a validação HTML5 continua valendo.
  contactForm.noValidate = true;

  // Cada regra recebe o campo e devolve a mensagem de erro (ou '' se estiver certo).
  const regras = {
    nome: campo => campo.value.trim().length >= 3 ? '' : 'Informe seu nome completo (mínimo de 3 letras).',
    email: campo => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim()) ? '' : 'Informe um e-mail válido, como pessoa@example.com.',
    telefone: campo => /^[0-9]{10,11}$/.test(campo.value.trim()) ? '' : 'Informe DDD e número, só com dígitos (10 ou 11).',
    assunto: campo => campo.value ? '' : 'Selecione um assunto.',
    data: campo => campo.value ? '' : 'Escolha uma data para o contato.',
    itens: campo => campo.value !== '' && Number(campo.value) >= 0 && Number(campo.value) <= 10000 ? '' : 'Informe uma quantidade entre 0 e 10000.',
    mensagem: campo => campo.value.trim().length >= 15 ? '' : 'Escreva uma mensagem com pelo menos 15 caracteres.',
    ciencia: campo => campo.checked ? '' : 'Marque a caixa para confirmar que entendeu que é uma demonstração.'
  };

  // Mostra ou remove a mensagem de erro de um campo e a borda em destaque.
  function validarCampo(nome) {
    const campo = contactForm.elements[nome];
    const mensagem = regras[nome](campo);
    const idErro = `erro-${nome}`;
    let erro = document.getElementById(idErro);
    if (!erro) {
      // O parágrafo de erro é criado uma vez e fica logo abaixo do campo.
      erro = document.createElement('p');
      erro.id = idErro;
      erro.className = 'field-error';
      (campo.closest('.field') || campo.closest('label')).append(erro);
      // Liga o erro ao campo para o leitor de tela ler a mensagem junto com o rótulo.
      campo.setAttribute('aria-describedby', `${campo.getAttribute('aria-describedby') || ''} ${idErro}`.trim());
    }
    erro.textContent = mensagem;
    erro.hidden = mensagem === '';
    campo.classList.toggle('is-invalid', mensagem !== '');
    campo.setAttribute('aria-invalid', String(mensagem !== ''));
    return mensagem === '';
  }

  // Guarda no navegador o que a pessoa já digitou, para não perder ao recarregar.
  function salvarRascunho() {
    const rascunho = {};
    Object.keys(regras).forEach(nome => {
      const campo = contactForm.elements[nome];
      rascunho[nome] = campo.type === 'checkbox' ? campo.checked : campo.value;
    });
    try { localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(rascunho)); } catch { /* Armazenamento bloqueado: o formulário segue funcionando. */ }
  }

  // Ao abrir a página, devolve aos campos o rascunho salvo (se existir).
  function restaurarRascunho() {
    let rascunho = null;
    try { rascunho = JSON.parse(localStorage.getItem(CHAVE_RASCUNHO) || 'null'); } catch { /* Rascunho ilegível é ignorado. */ }
    if (!rascunho || typeof rascunho !== 'object') return false;
    Object.keys(regras).forEach(nome => {
      const campo = contactForm.elements[nome];
      if (!(nome in rascunho)) return;
      if (campo.type === 'checkbox') campo.checked = rascunho[nome] === true;
      else campo.value = String(rascunho[nome]);
    });
    return true;
  }

  function apagarRascunho() {
    try { localStorage.removeItem(CHAVE_RASCUNHO); } catch { /* Nada a apagar. */ }
  }

  // Tira os destaques de erro de todos os campos (usado depois de limpar o formulário).
  function limparErros() {
    Object.keys(regras).forEach(nome => {
      const campo = contactForm.elements[nome];
      campo.classList.remove('is-invalid');
      campo.removeAttribute('aria-invalid');
      const erro = document.getElementById(`erro-${nome}`);
      if (erro) erro.hidden = true;
    });
  }

  // Escreve o aviso geral do formulário (verde para sucesso, laranja para atenção).
  function avisar(texto, sucesso) {
    status.textContent = texto;
    status.classList.toggle('success', sucesso);
    status.hidden = false;
  }

  const recuperou = restaurarRascunho();

  // Quem chega pelo botão de um anúncio recebe assunto e mensagem preenchidos.
  const params = new URLSearchParams(location.search);
  const material = params.get('material');
  if (material) {
    const context = document.querySelector('#contexto-material');
    context.textContent = `Você está simulando interesse em: ${material.slice(0, 100)}.`;
    context.hidden = false;
    document.querySelector('#assunto').value = 'interesse';
    document.querySelector('#mensagem').value = `Tenho interesse no material ${material.slice(0, 100)}. Gostaria de conferir as condições de retirada.`;
    document.querySelector('#itens').value = '1';
  } else if (params.get('assunto') === 'acessibilidade') {
    document.querySelector('#assunto').value = 'acessibilidade';
  }
  if (recuperou) avisar('Recuperamos o rascunho salvo neste navegador. Continue de onde parou.', true);

  // Botão para a pessoa apagar o rascunho quando quiser.
  const limpar = document.createElement('button');
  limpar.type = 'button';
  limpar.className = 'btn btn-secondary';
  limpar.textContent = 'Apagar rascunho';
  limpar.addEventListener('click', () => {
    apagarRascunho();
    contactForm.reset();
    limparErros();
    avisar('Rascunho apagado deste navegador.', true);
    contactForm.elements.nome.focus();
  });
  contactForm.querySelector('[type="submit"]').after(' ', limpar);

  // Enquanto a pessoa digita: salva o rascunho e revalida só o campo que já tinha erro.
  contactForm.addEventListener('input', event => {
    status.hidden = true;
    salvarRascunho();
    const nome = event.target.name;
    if (regras[nome] && event.target.classList.contains('is-invalid')) validarCampo(nome);
  });

  // Ao sair de um campo, ele é validado na hora.
  contactForm.addEventListener('focusout', event => {
    if (regras[event.target.name]) validarCampo(event.target.name);
  });

  contactForm.addEventListener('submit', event => {
    event.preventDefault(); // impede o envio e o recarregamento da página
    const invalidos = Object.keys(regras).filter(nome => !validarCampo(nome));
    if (invalidos.length > 0) {
      avisar(`Revise ${invalidos.length === 1 ? 'o campo destacado' : `os ${invalidos.length} campos destacados`} antes de continuar.`, false);
      contactForm.elements[invalidos[0]].focus(); // leva o foco ao primeiro erro
      return;
    }
    apagarRascunho();
    contactForm.reset();
    limparErros();
    avisar('Demonstração validada. Todos os campos estão corretos. Nenhuma mensagem foi enviada e o rascunho foi apagado deste navegador.', true);
  });
}

// ---------------------------------------------------------------------------
// Preferências de leitura (alto contraste e texto ampliado) no localStorage
// ---------------------------------------------------------------------------
let preferences = { contrast: false, large: false };
try {
  const saved = JSON.parse(localStorage.getItem('reforma-leitura') || 'null');
  if (saved && typeof saved === 'object') preferences = { contrast: saved.contrast === true, large: saved.large === true };
} catch { /* O conteúdo permanece disponível quando o armazenamento está bloqueado. */ }
function updateReading(save = false) {
  document.documentElement.classList.toggle('high-contrast', preferences.contrast);
  document.documentElement.classList.toggle('large-text', preferences.large);
  document.querySelector('#alto-contraste')?.setAttribute('aria-pressed', String(preferences.contrast));
  document.querySelector('#texto-ampliado')?.setAttribute('aria-pressed', String(preferences.large));
  if (save) {
    try { localStorage.setItem('reforma-leitura', JSON.stringify(preferences)); } catch { /* Preferência aplicada apenas à página atual. */ }
    const status = document.querySelector('#leitura-status');
    if (status) status.textContent = `Alto contraste ${preferences.contrast ? 'ativado' : 'desativado'}. Texto ${preferences.large ? 'ampliado' : 'no tamanho padrão'}.`;
  }
}
updateReading();
document.querySelector('#alto-contraste')?.addEventListener('click', () => { preferences.contrast = !preferences.contrast; updateReading(true); });
document.querySelector('#texto-ampliado')?.addEventListener('click', () => { preferences.large = !preferences.large; updateReading(true); });
document.querySelector('#restaurar-leitura')?.addEventListener('click', () => { preferences = { contrast: false, large: false }; updateReading(true); });
