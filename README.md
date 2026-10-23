# ReForma — Doação de materiais de construção

**Sobrou na sua obra, faz falta em outra casa.**

Site da Atividade A2 da disciplina de Front-End (Análise e Desenvolvimento de Sistemas — UNICID). O ReForma conecta quem tem sobras utilizáveis de materiais de construção com quem precisa delas, por meio de doações gratuitas. Tema: sustentabilidade e impacto social, com acessibilidade para pessoas com deficiência.

## Site no ar

- **Endereço público (Railway):** https://reforma-site-production.up.railway.app
- **Repositório:** https://github.com/Alantustoni/reforma-site — vinculado ao Railway. Cada push na branch `main` publica uma nova versão automaticamente.

## Equipe

| Integrante | RGM | Responsabilidades |
|---|---|---|
| Alan da Costa Tustoni | 47652535 | Coordenação, escopo, página inicial, catálogo, orçamento e documentação |
| Allan Santos Pereira | 047506458 | Estrutura HTML, páginas Sobre e Projetos; conteúdo de Impacto e Notícias |
| Bruno Ribeiro Alves Paixão | 47601388 | CSS, responsividade, Galeria e mídias |
| Vinicius da Silva Rocha | 47479981 | JavaScript, formulários, Contato, testes de interação e acessibilidade |

Equipe: ReForma · Turma: ADS 2º semestre · Professor: Prof. Paulo Fratta

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
| `contato.html` | Formulário com validação HTML5 e integrantes |
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

Interface acadêmica demonstrativa: não há back-end, banco de dados, publicação real de anúncios nem envio de mensagens. Os formulários validam e exibem uma prévia local. Anúncios, iniciativas, indicadores e imagens são fictícios e estão identificados como tal. Créditos e fontes em `docs/fontes.md`.
