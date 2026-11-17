# Diário de bordo - ReForma

Registro da preparação em 22/09/2026. Não substitui o relato individual dos integrantes.

| Etapa | Decisão ou atividade | Resultado |
|---|---|---|
| Interpretação | Usar o PDF da Atividade A2 e a orientação fotografada como base | Tema social/ambiental, acessibilidade obrigatória, interface em HTML e CSS, dez páginas |
| Escolha | Foco exclusivo na doação de materiais de construção utilizáveis | ReForma, com retirada combinada diretamente |
| Delimitação | Sem venda, pagamento, frete ou contratação de profissionais | Fluxo simples e viável para a etapa de Front-End |
| Identidade | Branco, verde escuro e terracota; fotografias de materiais | Relação visual com obra e reaproveitamento |
| Implementação | Dez arquivos HTML e recursos compartilhados de CSS/JS | Conteúdo permanece disponível sem framework |
| Conteúdo | Separar cenários fictícios de informações pesquisadas | Transparência sobre anúncios, iniciativas e impacto |
| Interação | Busca, detalhes, prévia de doação e contato demonstrativo | Sem banco de dados ou envio de informações |
| Acessibilidade | Semântica, rótulos, contraste, teclado, transcrições e preferências | Inclusão prevista desde a estrutura |
| Mídia | Três imagens de IA e vídeo/áudio autorais com voz sintética | Recursos locais para reduzir dependência de serviços externos |
| Pesquisa | Fontes oficiais de hospedagem, domínio e descarte | Orçamento com data e condições de contratação |
| Verificação | Validação HTML e testes de navegação e formulários | Resultados registrados em evidencias_testes.md |
| Entrega | Escopo em Markdown/PDF, TXT, print e ZIP | Revisão acadêmica e preenchimento dos dados da equipe pendentes |

## Aprendizados

- Um projeto social precisa de um problema específico e um fluxo simples.
- Aparência pronta não significa integração com servidor: a demonstração deve informar seus limites.
- Rótulos, descrições e hierarquia de títulos devem ser construídos junto com a interface.
- Preços promocionais de hospedagem precisam incluir o período contratado e a renovação.
- Indicadores de impacto precisam de unidade de medida e origem clara.

## Dificuldades e soluções

- Dados de equipe e prazo não informados: mantidos como campos a preencher, sem inventar nomes ou contribuições.
- Ausência de fotos reais de doações: imagens ilustrativas de IA identificadas em galeria e fontes.
- Necessidade de funcionar sem serviços externos: arquivos locais e formulários explicitamente demonstrativos.
- Vídeo e áudio: narração sintética acompanhada de transcrição e legendas.

## Próximo registro da equipe

Após a revisão, registrar quem modificou cada página, dificuldades encontradas e resultados dos testes no computador da apresentação.

## Publicação (GitHub + Railway)

| Etapa | Atividade | Resultado |
|---|---|---|
| Repositório | Criação do repositório no GitHub com README na raiz e envio das 10 páginas, css, js, img, assets e docs | Código versionado, index.html na raiz |
| Hospedagem | Projeto no Railway criado a partir do repositório (GitHub Repository → Deploy Repo) | Deploy automático a cada push na main |
| Endereço | Generate Domain em Settings → Networking | Endereço público registrado no README |
| Identificação | Preenchimento dos dados da equipe (nomes, RGMs, turma e professor) em contato.html, identificacao_e_atividade.txt, escopo.md/PDF e README | Documentação sem campos pendentes |

## Versão final (2ª entrega) — 16/11/2026

| Data | Atividade | Resultado |
|---|---|---|
| 16/11/2026 | Leitura do roteiro da Atividade 02 (AV A1) e comparação, item a item, com o que o repositório já tinha | Lista do que faltava: validação em JavaScript, dados do formulário no localStorage, branch e pull request, diário datado, melhorias do MVP, slides e rubrica |
| 16/11/2026 | Validação do formulário de contato reescrita em JavaScript | `preventDefault`, mensagem de erro abaixo de cada campo, borda vermelha, foco no primeiro erro |
| 16/11/2026 | Rascunho do contato no localStorage | Dados voltam ao recarregar a página; botão "Apagar rascunho" |
| 16/11/2026 | Remoção do trecho de busca via WebMCP do `js/principal.js` | Código menor, que a equipe consegue explicar linha a linha |
| 16/11/2026 | Trabalho em branch `versao-final` para abrir pull request | Histórico separado da `main` até a revisão |
| 16/11/2026 | Testes no navegador e atualização de README, escopo, evidências e deste diário | Registrados em evidencias_testes.md |

## Uso de IA

| Ferramenta | Onde foi usada | O que a equipe fez com o resultado |
|---|---|---|
| ChatGPT | MVP (22/09/2026): escolha da ideia, as dez páginas em HTML, o CSS, o JavaScript inicial, imagens, vídeo, áudio e a documentação | Aceito: estrutura das páginas, identidade visual e textos. Corrigido: integrantes e RGMs no escopo (de cinco para quatro pessoas) e, depois, os dados da equipe que tinham ficado pendentes no README e nos demais arquivos |
| Claude Code | Versão final (16/11/2026): comparação com o roteiro, validação em JavaScript, rascunho no localStorage e documentação | Código testado no navegador antes de ser aceito; trecho WebMCP gerado anteriormente foi recusado e removido |

### Prompts registrados

1. Claude Code, 16/11/2026 — pedido feito: concluir o trabalho da 2ª entrega do ReForma a partir do repositório no GitHub e do roteiro no Blackboard. Resultado aceito: validação com mensagens próprias e rascunho local. Revisado pela equipe: texto das mensagens de erro e comportamento ao recarregar.
2. ChatGPT, 22/09/2026 — "Manda 5 ideias que surpreenderia". Resultado: cinco propostas de doação e reaproveitamento (ReVeste, ReMobiliza, ReForma, ReSom e ReCostura). Aceito: ReForma, com a frase "Sobrou na sua obra, faz falta em outra casa". Recusado: as outras quatro e a primeira ideia (ReConecta, doação de computadores), porque a equipe quis focar em uma coisa só.
3. ChatGPT, 22/09/2026 — "Vamos dar andamento no Reforma ele se encaixa em todos os requisitos?" seguido de "Consegue fazer dar andamento? Concluir as tarefas e dar andamento no site?". Resultado: primeira versão com dez páginas, busca, formulários demonstrativos, mídia e documentação. Revisado pela equipe: nomes, RGMs, turma e professor, que vieram como campos a preencher.
4. ChatGPT, 22/09/2026 — "No pdf mude a área cronograma e divisão de tarefas no contexto de número 10 e considere os seguintes integrantes e números de RGM". Resultado: seção 10 do escopo atualizada. Corrigido em seguida: a lista passou de cinco para quatro integrantes.

### Sugestões de IA recusadas

- Integração de busca via WebMCP (`document.modelContext.registerTool`): removida porque não é exigida, não funciona nos navegadores comuns e dificultava explicar o código.
- Ideias ReConecta, ReLivro, ReVeste, ReMobiliza, ReSom e ReCostura: descartadas na escolha do tema, em 22/09/2026.
- A integração WebMCP foi incluída pelo ChatGPT sem ter sido pedida; por isso entrou na lista de itens removidos na versão final.
