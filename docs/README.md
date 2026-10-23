# ReForma - Projeto de Front-End

**Ideia central:** conectar quem tem sobras utilizáveis de materiais de construção com quem precisa delas, por meio de doações gratuitas.

**Frase principal:** Sobrou na sua obra, faz falta em outra casa.

Projeto acadêmico de Análise e Desenvolvimento de Sistemas, UNICID. Tema: sustentabilidade e impacto social, com acessibilidade para pessoas com deficiência.

## Como abrir

1. Extraia o arquivo ReForma_Projeto.zip.
2. Abra a pasta ReForma e o arquivo index.html no navegador.
3. As dez páginas são arquivos HTML independentes, ligados por menus e rodapés.
4. HTML, CSS, JavaScript, imagens, vídeo e áudio são locais. Não é necessário instalar bibliotecas para visualizar o projeto.
5. Para testar as legendas externas e todas as APIs do navegador com origem HTTP, use no terminal, dentro da pasta ReForma: `python3 -m http.server 8000`. Acesse `http://localhost:8000`. Navegadores podem restringir faixas VTT em `file://`; o vídeo também tem legendas gravadas na imagem e transcrição textual.

## O que funciona

- Navegação entre as dez páginas, com HTML semântico.
- Catálogo com três anúncios de exemplo, busca por texto, categoria e bairro, estado sem resultados e limpeza de filtros.
- Detalhes de cada anúncio e ligação para formulário com contexto do material.
- Prévia de doação com valores preenchidos pelo visitante, sem publicação ou armazenamento.
- Validação HTML5 do contato: required, email, tel, date, number, pattern e rótulos associados.
- Preferências locais de alto contraste e texto ampliado.
- Vídeo, áudio, transcrição, legendas e iframe com conteúdo local incorporado.
- Tabelas de impacto simulado e orçamento de hospedagem/domínio com fontes.

## Limites da primeira versão

Esta é uma interface acadêmica. Não há backend, autenticação, banco de dados, publicação real de anúncios, envio de mensagens, upload de fotos nem confirmação real de retirada. Nenhum formulário faz requisição de envio. Os dados dos formulários permanecem na página e somem ao sair. Apenas preferências de leitura usam localStorage.

Os anúncios, os projetos apresentados e os indicadores de impacto são fictícios e estão identificados. As imagens são ilustrativas, geradas com IA. Nenhum nome de domínio foi reservado e nenhuma hospedagem paga foi contratada.

## Arquivos e páginas

| Arquivo | Função |
|---|---|
| index.html | Início, catálogo, filtros e prévia de doação |
| sobre.html | História, missão, visão e valores |
| projetos.html | Iniciativas ilustrativas de reaproveitamento |
| impacto.html | Dados e tabelas de cenário fictício |
| acessibilidade.html | Recursos e preferências de leitura |
| galeria.html | Imagens, legendas e fontes |
| midia.html | Vídeo, áudio, transcrição e iframe |
| noticias.html | Artigos autorais e referência oficial |
| contato.html | Formulário HTML5 e integrantes |
| orcamento_hospedagem.html | Comparativo e justificativa |
| css/estilo.css | Identidade visual e responsividade |
| js/principal.js | Interações locais e preferências |
| img/ | Fotografias ilustrativas otimizadas e pôster do vídeo |
| assets/ | MP4, MP3, VTT e transcrição |
| docs/ | Escopo, planejamento, fontes, orçamento e testes |

## Divisão de funções a confirmar

| Responsabilidade | Pessoa |
|---|---|
| Proposta e coordenação | Alan Costa - confirmar nome completo e RA |
| Conteúdo e páginas institucionais | Integrante(s) a definir |
| Catálogo, formulários e interações | Integrante(s) a definir |
| Identidade visual e responsividade | Integrante(s) a definir |
| Acessibilidade, mídia e testes | Integrante(s) a definir |
| Documentação e entrega | Integrante(s) a definir |

A lista não atribui trabalho já realizado aos colegas. A equipe deve registrar a divisão efetiva e revisar a implementação para conseguir apresentá-la.

## Antes de enviar ao Blackboard

- Preencher todos os nomes completos, RAs, turma, equipe, professor e data oficial.
- Atualizar a seção de integrantes em contato.html e docs/identificacao_e_atividade.txt.
- Conferir escopo.md e Escopo_ReForma.pdf, incluindo a aprovação a preencher.
- Verificar o prazo e a forma de envio no Blackboard. O projeto não foi enviado automaticamente.
- Reunir ZIP, identificação/descrição em TXT, escopo em PDF e print em PNG conforme o enunciado.

## Tecnologias e autoria

HTML5, CSS3 e JavaScript sem framework na entrega. O ambiente de desenvolvimento utiliza Vite apenas para revisão local. O conteúdo, a implementação e as imagens foram preparados com assistência de IA e devem ser revisados e assumidos pela equipe conforme as regras da disciplina. A narração usa voz sintética. Créditos e fontes estão em fontes.md.
