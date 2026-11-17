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
- Contato validado em JavaScript (`preventDefault`): mensagem de erro própria abaixo de cada campo, borda vermelha em destaque, foco levado ao primeiro erro e aviso geral. Sem JavaScript, a validação HTML5 (required, email, tel, date, number, pattern) continua valendo.
- Rascunho do contato salvo no `localStorage`: ao recarregar a página os dados digitados voltam; o botão "Apagar rascunho" e a validação bem-sucedida removem o rascunho.
- Preferências locais de alto contraste e texto ampliado.
- Vídeo, áudio, transcrição, legendas e iframe com conteúdo local incorporado.
- Tabelas de impacto simulado e orçamento de hospedagem/domínio com fontes.

## Limites desta versão

Esta é uma interface acadêmica. Não há backend, autenticação, banco de dados, publicação real de anúncios, envio de mensagens, upload de fotos nem confirmação real de retirada. Nenhum formulário faz requisição de envio. A prévia de doação permanece na página e some ao sair. O `localStorage` guarda apenas as preferências de leitura e o rascunho do formulário de contato, sempre no navegador da própria pessoa.

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
| contato.html | Formulário validado em JavaScript, rascunho local e integrantes |
| orcamento_hospedagem.html | Comparativo e justificativa |
| css/estilo.css | Identidade visual e responsividade |
| js/principal.js | Interações locais e preferências |
| img/ | Fotografias ilustrativas otimizadas e pôster do vídeo |
| assets/ | MP4, MP3, VTT e transcrição |
| docs/ | Escopo, planejamento, fontes, orçamento e testes |

## Equipe ReForma — ADS 2º semestre — Prof. Paulo Fratta

| Integrante | Responsabilidade |
|---|---|
| Alan da Costa Tustoni | Coordenação, escopo, página inicial, catálogo, orçamento e documentação |
| Allan Santos Pereira | Estrutura HTML, páginas Sobre e Projetos; conteúdo de Impacto e Notícias |
| Bruno Ribeiro Alves Paixão | CSS, responsividade, Galeria e mídias |
| Vinicius da Silva Rocha | JavaScript, formulários, Contato e testes de interação e acessibilidade |

## Publicação

- Repositório: https://github.com/Alantustoni/reforma-site
- Site no ar (Railway): https://reforma-site-production.up.railway.app

## Antes de enviar ao Blackboard

- Prazo da 2ª entrega (Atividade 02 – AV A1): 17/11/2026, 23h59.
- Reunir: TXT com nome e RA dos integrantes, URL do site e link do repositório, slides, prints da home (computador e celular), evidências de validação, ZIP do projeto e planilha da rubrica preenchida.

## Tecnologias e autoria

HTML5, CSS3 e JavaScript sem framework na entrega. O ambiente de desenvolvimento utiliza Vite apenas para revisão local. O conteúdo, a implementação e as imagens foram preparados com assistência de IA e devem ser revisados e assumidos pela equipe conforme as regras da disciplina. A narração usa voz sintética. Créditos e fontes estão em fontes.md.
