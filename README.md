# ReForma — Doação de materiais de construção

**Sobrou na sua obra, faz falta em outra casa.**

Site do projeto da disciplina de Front-End, na versão final da Atividade 02 (AV A1), que evolui o MVP entregue na Atividade 01 (Análise e Desenvolvimento de Sistemas — UNICID). O ReForma conecta quem tem sobras utilizáveis de materiais de construção com quem precisa delas, por meio de doações gratuitas. Tema: sustentabilidade e impacto social, com acessibilidade para pessoas com deficiência.

## Site no ar

- **Endereço público (Railway):** https://reforma-site-production.up.railway.app
- **Repositório:** https://github.com/Alantustoni/reforma-site — vinculado ao Railway. Cada push na branch `main` publica uma nova versão automaticamente.

## Equipe

| Integrante | Responsabilidades |
|---|---|
| Alan da Costa Tustoni | Coordenação, escopo, página inicial, catálogo, orçamento e documentação |
| Allan Santos Pereira | Estrutura HTML, páginas Sobre e Projetos; conteúdo de Impacto e Notícias |
| Bruno Ribeiro Alves Paixão | CSS, responsividade, Galeria e mídias |
| Vinicius da Silva Rocha | JavaScript, formulários, Contato, testes de interação e acessibilidade |

Equipe: ReForma · Turma: ADS 2º semestre · Professor: Prof. Paulo Fratta

O site foi construído com assistência de IA (registro em `docs/diario_de_bordo.md`). Cada integrante é responsável por revisar, explicar e apresentar a sua área.

## As 10 páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Início, catálogo com busca por texto/categoria/bairro e prévia de doação |
| `sobre.html` | História, missão, visão e valores |
| `projetos.html` | Propostas ilustrativas de reaproveitamento |
| `impacto.html` | Indicadores e tabela de cenário fictício |
| `acessibilidade.html` | Recursos e preferências de leitura (contraste e tamanho do texto) |
| `galeria.html` | Imagens com descrições, legendas e fontes |
| `midia.html` | Vídeo com legendas, áudio com transcrição e iframe |
| `noticias.html` | Artigos autorais e referência oficial de descarte |
| `contato.html` | Formulário com validação em JavaScript, rascunho salvo no `localStorage` e integrantes |
| `orcamento_hospedagem.html` | Comparativo de três hospedagens e três domínios |

## Estrutura do repositório

```
index.html                 página inicial (raiz, como o Railway exige)
[outras 9 páginas].html
css/estilo.css             identidade visual e responsividade
js/principal.js            busca, formulários e preferências locais
img/                       imagens WebP otimizadas e pôster do vídeo
assets/                    MP4, MP3, legendas VTT e transcrição
docs/                      escopo (.md e .pdf), README detalhado, diário de bordo,
                           orçamento, fontes, evidências de testes e prints
```

## Como rodar localmente

Abra o `index.html` no navegador. Para testar as legendas VTT e todas as APIs do navegador com origem HTTP, rode na pasta do projeto:

```
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.

## Tecnologias

HTML5 semântico, CSS3 e JavaScript puro, sem frameworks. Validação HTML pelo Nu Html Checker (W3C). Hospedagem no Railway com deploy automático a partir do GitHub.

## Limites desta versão

Interface acadêmica demonstrativa: não há back-end, banco de dados, publicação real de anúncios nem envio de mensagens. Os formulários validam e exibem uma prévia local; o rascunho do contato fica apenas no navegador da pessoa. Anúncios, iniciativas, indicadores e imagens são fictícios e estão identificados como tal. Créditos e fontes em `docs/fontes.md`.

## Versão final (2ª entrega)

O que mudou desde o MVP está em [`docs/melhorias_mvp.md`](docs/melhorias_mvp.md). O diário de bordo datado, com o registro do uso de IA, está em [`docs/diario_de_bordo.md`](docs/diario_de_bordo.md), e os testes em [`docs/evidencias_testes.md`](docs/evidencias_testes.md).
