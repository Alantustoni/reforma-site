# Evidências de testes - ReForma

Verificações realizadas em 22/09/2026 na primeira versão preparada. Resultados técnicos não representam aprovação acadêmica ou certificação de acessibilidade.

## Validação HTML

Nu Html Checker versão 26.9.16 (e63d468), ferramenta também utilizada pelo serviço validator.w3.org/nu. Validação local dos dez arquivos HTML principais.

Resultado: **0 erros e 0 avisos**. Registro bruto: validacao_html.json.

Comando de referência: `java -jar vnu.jar --format json caminho/*.html`.

## Estrutura e referências

Verificação automatizada com o parser HTML da biblioteca padrão do Python:

- Dez páginas principais.
- Exatamente um h1 por página principal.
- IDs únicos em cada página.
- Referências locais de href, src e poster existentes.
- Âncoras locais encontradas.
- Imagens com alt descritivo.
- Campos de formulário associados a label por for/id.

Resultado: nenhuma referência ausente ou falha estrutural detectada. Registro: verificacao_estrutura.json. Verificação sintática do JavaScript com `node --check`: aprovada.

## Interações verificadas no navegador

| Teste | Resultado observado |
|---|---|
| Busca por “tijolos” | Um anúncio retornado |
| Busca por “madeira” | Mensagem “Nenhum material encontrado” |
| Limpar filtros | Três anúncios novamente visíveis |
| Prévia de doação | Material, quantidade, unidade, bairro e descrição apresentados; aviso explícito de não publicação |
| Contato vazio | Nome obrigatório inválido, com valueMissing |
| Contato com dados de exemplo válidos | Confirmação de demonstração validada, sem envio |
| E-mail “email-invalido” | typeMismatch detectado |
| Telefone “123” | patternMismatch detectado |
| Alto contraste e ampliação de texto | Preferências aplicadas e estado anunciado |
| Restaurar padrão | Controle acionado para retornar à leitura padrão |
| Link Pular para o conteúdo por Enter | Foco transferido para o elemento conteudo |
| Navegação | Percursos entre início, contato, acessibilidade e mídia realizados |

Os dados usados foram fictícios (Pessoa de Teste, pessoa@example.com). Não houve envio de mensagens.

## Layout e contraste

- Página inicial revisada visualmente em viewport de computador, aproximadamente 1363 x 936.
- Página inicial renderizada em iframe de 390 x 844 para verificar o comportamento responsivo. Largura útil observada: 375 px, com scrollWidth também 375 px, sem rolagem horizontal do documento.
- Capturas em ReForma_Interface.png e ReForma_Mobile.png. O print móvel é recorte da área do iframe de teste, não uma captura em aparelho físico.
- Páginas de contato e mídia inspecionadas visualmente. Vídeo ajustado para preservar proporção 16:9.
- Os pares principais de texto e fundo do tema padrão foram calculados pela fórmula de luminância relativa: texto principal/branco 14,61:1; texto secundário/branco 6,52:1; terracota/branco 5,72:1; verde/fundo claro 6,90:1; texto claro/verde 7,03:1; texto secundário do rodapé/fundo escuro 8,61:1.

Os valores indicam os pares especificados, não uma auditoria automática de todos os estados e componentes.

## Mídia e documentação

- Arquivo MP4: H.264/AAC, 960 x 540, aproximadamente 32 segundos; metadados conferidos com FFprobe.
- Arquivo MP3: gerado a partir da mesma narração em português do Brasil.
- Legendas em VTT e gravadas na imagem do vídeo; transcrição em HTML e assets/transcricao.txt.
- Página de mídia exibiu pôster, controles de reprodução e duração de 32 segundos no áudio.
- Iframe com as etapas da doação presente no conteúdo acessível observado.
- Escopo PDF: cinco páginas renderizadas e revisadas visualmente, sem cortes ou sobreposições observados.

## Limites da verificação

- Não houve avaliação por usuários de leitores de tela ou por pessoas com deficiência; essa rodada permanece recomendada antes de uso real.
- Não houve auditoria integral WCAG, teste em aparelho físico ou validação de todas as combinações de navegador e ampliação.
- A reprodução completa do áudio/vídeo não foi avaliada subjetivamente; arquivos, metadados, pôster, controles e transcrição foram conferidos.
- A API opcional WebMCP não estava disponível no contexto de teste. Sua execução não foi validada; a busca convencional foi testada e funciona de forma independente.
- O projeto não possui backend; nenhum teste de entrega real de mensagens, anúncios ou retirada é aplicável nesta versão.

## Revisão antes da entrega

Abrir a pasta extraída no computador da apresentação, percorrer as páginas e confirmar reprodução da mídia. Preencher os dados completos da equipe e consultar o prazo no Blackboard.
