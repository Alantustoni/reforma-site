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
  // A mesma busca pode ser usada por agentes em navegadores compatíveis.
  if (document.modelContext?.registerTool) {
    const lifecycle = new AbortController();
    window.addEventListener('pagehide', () => lifecycle.abort(), { once: true });
    try {
      Promise.resolve(document.modelContext.registerTool({
        name: 'filtrar_materiais_demonstracao',
        title: 'Filtrar materiais de demonstração',
        description: 'Atualiza os filtros visíveis do catálogo de anúncios fictícios. Não solicita materiais, não publica doações e não envia dados.',
        inputSchema: { type: 'object', properties: { termo: { type: 'string', maxLength: 100 }, categoria: { type: 'string', enum: ['', 'Pisos', 'Tijolos', 'Telhas'] }, bairro: { type: 'string', enum: ['', 'Tatuapé', 'Mooca', 'Penha'] } }, additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input) {
          if (!input || typeof input !== 'object' || Array.isArray(input) || Object.keys(input).some(key => !['termo', 'categoria', 'bairro'].includes(key))) throw new Error('Filtros inválidos.');
          const { termo = '', categoria = '', bairro = '' } = input;
          if (typeof termo !== 'string' || termo.length > 100 || !['', 'Pisos', 'Tijolos', 'Telhas'].includes(categoria) || !['', 'Tatuapé', 'Mooca', 'Penha'].includes(bairro)) throw new Error('Filtros inválidos.');
          query.value = termo; category.value = categoria; locationSelect.value = bairro;
          applyFilters();
          return { demonstracao: true, resultados: cards.filter(card => !card.hidden).map(card => ({ material: card.querySelector('h3').textContent, categoria: card.dataset.category, bairro: card.dataset.location })) };
        }
      }, { signal: lifecycle.signal })).catch(() => {});
    } catch { /* Recurso opcional. A busca visual continua disponível. */ }
  }
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

const contactForm = document.querySelector('#contato');
if (contactForm) {
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
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const status = document.querySelector('#contato-status');
    status.textContent = 'Demonstração validada. Todos os campos obrigatórios foram preenchidos. Nenhuma mensagem foi enviada e nenhum dado foi armazenado.';
    status.hidden = false;
  });
  contactForm.addEventListener('input', () => { document.querySelector('#contato-status').hidden = true; });
}

// Apenas preferências de leitura são mantidas no dispositivo.
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
