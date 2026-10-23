# ReForma - Escopo do Projeto

Sobrou na sua obra, faz falta em outra casa.

## 1. Identificação

- Instituição: Universidade Cidade de São Paulo (UNICID).
- Curso: Análise e Desenvolvimento de Sistemas.
- Disciplina: Front-End.
- Projeto: ReForma - Doação de materiais de construção.
- Nome da equipe: a preencher.
- Proponente: Alan Costa (confirmar nome completo e RA).
- Demais integrantes e RAs: a preencher pela equipe.
- Turma e professor(a): a confirmar.
- Data de preparação: 22/09/2026.
- Prazo de entrega: consultar o Blackboard.

## 2. Contexto e justificativa

Sobras utilizáveis de reformas podem ficar sem destino enquanto outras pessoas precisam de materiais para pequenas melhorias de moradia. O ReForma propõe conectar esses dois lados por meio da doação gratuita de materiais de construção.

A relação com sustentabilidade está no incentivo ao reaproveitamento e na redução do desperdício. O impacto social pretendido é facilitar o acesso a materiais para quem precisa, com uma interface acessível também a pessoas com deficiência. A iniciativa começa em São Paulo, com localização por bairro.

A interface não promete resultados ambientais quantificados sem dados reais. Os indicadores apresentados são exemplos identificados como fictícios.

## 3. Objetivos

Objetivo geral: desenvolver uma interface acessível que represente a conexão entre doadores de sobras utilizáveis de materiais de construção e pessoas interessadas em reaproveitá-las.

Objetivos específicos mensuráveis:

1. Disponibilizar dez páginas HTML interligadas, incluindo as páginas exigidas na atividade.
2. Apresentar três anúncios fictícios com categoria, quantidade, condição, bairro e detalhes.
3. Implementar busca com texto, categoria e bairro, incluindo retorno sem resultados e limpeza dos filtros.
4. Disponibilizar dois formulários demonstrativos com campos rotulados e validação HTML5: prévia de doação e contato.
5. Disponibilizar vídeo legendado, áudio com transcrição, iframe e registros de verificação de navegação, código e acessibilidade.

## 4. Público-alvo

Pessoas adultas, famílias, pequenos reformadores e iniciativas comunitárias de São Paulo que tenham sobras utilizáveis ou precisem de materiais para pequenas melhorias. Pessoas com deficiência são público prioritário de inclusão.

Necessidades consideradas: acesso pelo celular, linguagem simples, informação objetiva sobre os materiais, localização aproximada por bairro, navegação por teclado e compatibilidade estrutural com leitores de tela. Não há coleta de informações sobre renda ou deficiência.

## 5. Escopo funcional

| Página | Conteúdo e função |
|---|---|
| index.html | Apresentação, catálogo, filtros, detalhes e prévia de doação |
| sobre.html | Origem da ideia, missão, visão e valores |
| projetos.html | Três propostas ilustrativas de reaproveitamento |
| impacto.html | Indicadores e tabela de cenário fictício; proposta de medição |
| acessibilidade.html | Orientações e preferências de contraste/tamanho de texto |
| galeria.html | Três imagens com descrições, legendas e fontes |
| midia.html | Vídeo, áudio, legendas, transcrição e iframe |
| noticias.html | Artigos autorais e referência oficial de descarte |
| contato.html | Formulário HTML5, dados fictícios e integrantes |
| orcamento_hospedagem.html | Três hospedagens, três domínios, custos e justificativa |

Fluxo principal de consulta: abrir a página inicial, consultar ou filtrar os exemplos, abrir os detalhes de um material e acessar o contato com o contexto preenchido.

Fluxo de doação: acessar “Doar material”, informar dados de exemplo e visualizar uma prévia local. O formulário não publica nem salva um anúncio.

Os formulários não enviam mensagens nem dados para servidores. O contato valida o preenchimento e apresenta uma confirmação de demonstração. Retirada e contato real ficam previstos para uma evolução posterior.

## 6. Escopo não funcional

- Acessibilidade: idioma pt-BR, hierarquia de títulos, HTML semântico, descrições das imagens, rótulos ligados aos campos, indicação de foco, contraste legível, navegação por teclado, mensagens de status e transcrição/legendas.
- ARIA: usada quando acrescenta significado, como regiões de status, navegação e identificação de tabelas roláveis; preferência por elementos nativos.
- Responsividade: adaptação a celular, tablet e computador, incluindo reorganização de cartões e formulários. Registrar as larguras efetivamente verificadas nas evidências.
- Desempenho: imagens WebP otimizadas, dimensões declaradas, carregamento adiado quando adequado e mídias sem autoplay, com preload de metadados.
- Sustentabilidade: conteúdo de reaproveitamento, orçamento com critério ambiental declarado pelo provedor e redução de transferências desnecessárias.
- SEO básico: título e descrição próprios para cada página e hierarquia de headings.
- Privacidade: formulários sem transmissão nem persistência; preferências de leitura locais e possibilidade de restaurar o padrão.
- Portabilidade: a entrega é composta por HTML, CSS, JS e arquivos locais; não depende de framework para abrir no navegador.

## 7. Mapa e navegação do site

A página inicial é o ponto de entrada. As dez páginas são ligadas pelos menus principal e de rodapé. O menu “Mais” reúne conteúdos institucionais e recursos complementares.

| Origem | Destino | Ação |
|---|---|---|
| Qualquer página | index.html | Logotipo ou link Materiais |
| Qualquer página | index.html#doar | Botão Doar material |
| Catálogo | contato.html | Simular interesse no material |
| Projetos | index.html | Consultar categoria relacionada |
| Acessibilidade | contato.html | Relatar dificuldade na demonstração |
| Rodapé | Todas as dez páginas | Navegação completa |

## 8. Conteúdo e identidade visual

Nome: ReForma. Frase: “Sobrou na sua obra, faz falta em outra casa.” Tom de voz: claro, acolhedor, objetivo e comunitário.

Identidade: branco (#FFFFFF), verde escuro (#225B43), terracota (#B73C18) e texto escuro (#202B28). A terracota faz referência aos materiais de construção; o verde reforça o reaproveitamento. Tipografia Arial/Helvetica, com fontes de sistema para evitar downloads externos. Marca tipográfica ReForma e monograma RF.

Textos próprios para o projeto; referência externa identificada no artigo sobre Ecopontos e no orçamento. As três imagens são ilustrativas, geradas com IA, e não comprovam doações reais. Vídeo e áudio usam roteiro autoral, imagens ilustrativas e voz sintética. Créditos detalhados em fontes.md.

## 9. Tecnologias e ferramentas

HTML5, CSS3 e JavaScript sem framework na entrega. Vite é usado somente no ambiente de desenvolvimento para revisão. Git registra a versão do projeto. O Nu Html Checker é utilizado para validação HTML; navegador para verificações de interação e layout. FFmpeg produz os arquivos de mídia; ReportLab gera o PDF do escopo. As ferramentas de produção não precisam ser instaladas para abrir o ZIP.

Há uma integração opcional de busca para navegadores com WebMCP. A busca convencional funciona independentemente dessa API. Sua disponibilidade e validação são registradas nas evidências.

## 10. Cronograma e divisão de tarefas

| Etapa | Data/condição | Responsável |
|---|---|---|
| Definição da ideia e escopo | 22/09/2026 | Alan Costa e equipe - confirmar |
| Estrutura e identidade visual | 22/09/2026 | Equipe - atribuir nomes |
| Páginas, formulários e conteúdo | 22/09/2026 | Equipe - atribuir nomes |
| Mídia, orçamento e documentação | 22/09/2026 | Equipe - atribuir nomes |
| Testes e revisão da primeira versão | 22/09/2026 | Equipe - atribuir nomes |
| Preenchimento dos dados acadêmicos | Antes do envio | Todos os integrantes |
| Aprovação e envio ao Blackboard | Conforme prazo oficial | Responsável a definir |

A tabela é um plano de organização, não uma declaração de contribuição individual. A equipe deve registrar a divisão real no README e no diário de bordo. Gestão proposta: checklist compartilhado e histórico de alterações.

## 11. Riscos e restrições

- Prazo curto: priorizar as dez páginas e os recursos exigidos, mantendo o foco em doações.
- Conhecimento técnico: manter código legível, arquivos separados e explicações no README.
- Dados não fornecidos: identificação acadêmica, divisão de tarefas e aprovação precisam ser completadas.
- Conteúdo demonstrativo: não confundir imagens, iniciativas ou números simulados com resultados reais.
- Reprodução local: alguns navegadores limitam legendas VTT no protocolo file; vídeo com legendas gravadas e transcrição como alternativas, além de servidor HTTP local para teste completo.
- Serviços externos: preços, condições e disponibilidade de domínio podem mudar.
- Acessibilidade: testes automatizados e revisão técnica não substituem avaliação com pessoas com deficiência.

Fora desta versão: venda, pagamentos, frete, prestação de serviços, contas de usuário, publicação real de anúncios, upload, banco de dados e mensagens reais.

## 12. Critérios de aceitação

1. Exatamente dez páginas principais disponíveis, interligadas e com conteúdo coerente com reaproveitamento e impacto social.
2. Catálogo e detalhes legíveis, busca funcional e feedback de ausência de resultados.
3. Formulários rotulados, campos HTML5 exigidos, validação de preenchimento e confirmação honesta de demonstração.
4. Imagens com alt e fontes; vídeo, áudio, legendas/transcrição e iframe presentes e carregáveis.
5. Navegação por teclado, foco visível, contraste e adaptação de layout verificados dentro dos limites registrados.
6. Validação HTML pelo Nu Html Checker sem erros na versão conferida e referências locais sem arquivos ausentes.
7. README, diário de bordo, orçamento, fontes, escopo e evidências disponíveis em docs.
8. ZIP, print PNG, descrição TXT e PDF preparados; equipe completa a identificação e confirma o prazo antes do envio.

O cumprimento técnico deve ser lido junto das evidências. A aprovação acadêmica cabe ao professor; não há certificação formal de acessibilidade.

## 13. Aprovação

Responsável pela validação do escopo: a preencher.

Nome: ______________________________________________

Data: ____ / ____ / ________

Assinatura: _________________________________________

Situação: primeira versão preparada para revisão; aprovação pendente.
