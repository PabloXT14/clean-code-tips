# Números Mágicos

## O que são Números Mágicos?

- São valores numéricos ou literais constantes no código que não possuem significado claro.
- Dificultam a leitura e compreensão do código, especialmente para quem não o conhece.
- São mais comuns em operações com datas, intervalos e conversões de unidades.

## Problemas Causados por Números Mágicos

- **Falta de Clareza:** Dificultam a interpretação do código e a identificação de sua lógica.
- **Dificuldade de Manutenção:** Tornam o código mais difícil de atualizar e modificar, pois os valores não são autoexplicativos.
- **Erros e Bugs:** Aumentam a chance de erros e bugs, pois os valores podem estar incorretos ou desatualizados.

## Exemplos de Números Mágicos

- Configurar um `setTimeout` com valor em milissegundos calculado manualmente.
- Utilizar valores numéricos literais para representar datas, horários ou preços sem contexto.
- Exemplo:
    
    ```tsx
    setTimeout(() => {
    	// do something
    }, 1800000)
    ```
    

## Como Evitar Números Mágicos

- **Utilizar Variáveis Significativas:** Atribuir nomes descritivos às variáveis que armazenam valores numéricos.
- **Criar Constantes:** Criar constantes para valores que não mudam no código.
- **Utilizar Funções:** Encapsular cálculos complexos em funções com nomes descritivos.
- **Comentários:** Adicionar comentários explicativos para esclarecer o significado de valores numéricos.
- Exemplo:
    
    ```tsx
    
    const INTERVAL_30_MINUTES_IN_MILLISECONDS = 1000 * 60 * 30 // = 1800000
    
    setTimeout(() => {
    	// do something
    }, INTERVAL_30_MINUTES_IN_MILLISECONDS)
    
    // OR
    
    setTimeout(() => {
    	// do something
    }, 1000 * 60 * 30) // 30 minutes
    ```
    

## Dicas Adicionais

- Usar separadores numéricos (ex: `_`) para facilitar a leitura de números grandes em javascript (ex: `1_800_000` → não altera o número, só fica melhor a leitura do dev).
- Salvar valores monetários em centavos para evitar problemas de precisão.
- Armazenar datas e horários em formatos padronizados (ex: minutos, milissegundos).
- Nomear variáveis e funções de acordo com o formato dos dados que armazenam.

## Conclusão:

Evitar o uso de números mágicos é uma boa prática de programação que melhora a legibilidade, manutenabilidade e confiabilidade do código. Ao utilizar técnicas como variáveis significativas, constantes, funções e comentários, você torna o código mais fácil de entender e modificar, reduzindo a chance de erros e bugs.
