# Princípios de DDD

## **Introdução**

- O vídeo apresenta o Domain Driven Design (DDD) como uma abordagem para o design de software focada no domínio do problema.
- É importante diferenciar DDD de conceitos como arquitetura, que se aplica em uma etapa posterior do desenvolvimento.
- DDD é mais adequado para projetos que já sofreram com a falta de clareza no escopo ou na comunicação entre stakeholders.

## **Conceitos Básicos**

- **Domínio:** O problema que o software está resolvendo e seu contexto (ex: uma Escola de Programação/Tecnologia).
- **Subdomínios:** Divisões menores dentro do domínio, representando diferentes áreas de conhecimento (ex: Logística, Faturamento, Pagamento e Estoque).
- **Entidades:** Estruturas ou atores dentro de cada subdomínio
    - Ex: Ordens de Pedido, Notas Fiscais.
- **Casos de Uso:** Ações realizadas entre as entidades, como elas se relacionam.
    - Ex: Emissão de notas fiscais.

## **Identificando Entidades e Casos de Uso**

- A identificação destes ocorre através da conversa com especialistas no domínio (**Domain Experts**).
- Exemplo: Conversando com o especialista em faturamento, identifica-se as entidades `Ordens de Pedido` e `Notas Fiscais`, e o caso de uso `Emitir Nota Fiscal`.
- É importante dar nomes precisos às entidades, considerando seu papel em cada subdomínio.

## **DDD e Clean Code**

- DDD reforça a importância de nomear as entidades de forma clara e descritiva, evitando nomes genéricos como `User`.
- Uma mesma entidade pode ter diferentes nomes em diferentes subdomínios (ex: `cliente` no subdomínio de compras e `destinatário` no subdomínio de logística).

## **Observações**

- O resumo se concentra nos tópicos principais do vídeo, omitindo detalhes e exemplos específicos.
- Para uma compreensão completa, é recomendável assistir ao vídeo original.
