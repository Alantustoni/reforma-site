# Regras de uso de IA no ReForma

Plano de contexto usado ao pedir ajuda a assistentes de IA neste projeto. Definido em 16/11/2026, a partir do que deu certo e do que precisou ser corrigido no MVP.

## Contexto que a IA precisa receber

- Projeto: ReForma, site acadêmico de doação de sobras de materiais de construção (UNICID, Front-End).
- Tecnologias: HTML5, CSS3 e JavaScript puro. Sem frameworks e sem back-end.
- Estrutura: dez páginas na raiz, `css/estilo.css`, `js/principal.js`, mídias em `img/` e `assets/`, documentação em `docs/`.
- Publicação: GitHub, com deploy automático no Railway a cada push na `main`.

## Regras

1. Escrever textos e comentários em português do Brasil.
2. Não inventar dados, nomes, integrantes nem resultados. Dado fictício precisa estar identificado como fictício; dado real precisa de fonte.
3. Manter a acessibilidade: `lang="pt-BR"`, rótulo em todo campo, `alt` em toda imagem, foco visível e navegação por teclado.
4. Não acrescentar recurso que o enunciado não pede (exemplo recusado: integração WebMCP).
5. Todo JavaScript novo vem comentado, em arquivo externo, e precisa ser explicado por alguém da equipe antes de entrar na `main`.
6. Nenhuma alteração vai direto para a `main`: branch, pull request e revisão de um integrante.
7. O que a IA entrega é testado no navegador antes de ser aceito, e o teste é registrado em `docs/evidencias_testes.md`.
8. Cada uso relevante de IA é registrado no diário de bordo: prompt, o que foi aceito e o que foi corrigido.
