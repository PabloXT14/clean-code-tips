# Evite Syntactic Sugar

## O que é Syntactic Sugars (Açúcar Sintático)

- São recursos específicos de uma linguagem de programação que não existem em outras.
- Podem ser úteis para aumentar a produtividade, mas também podem dificultar a leitura do código para quem não conhece a linguagem.

## Quando evitar Syntactic Sugars?

- Quando não traz um ganho significativo de produtividade.
- Quando torna o código difícil de entender para quem não conhece a linguagem.
- Quando existe uma maneira mais comum e legível de realizar a mesma tarefa.
- **Exemplos de Syntactic Sugars no JavaScript:**
    - Conversão de String para número:
        
        ```jsx
        const numberInString = "12345"
        
        const number = +numberInString // Syntactic Sugar
        
        // Recomendado
        const number = Number(numberInString)
        ```
        
    - Verificação de valor nulo:
        
        ```jsx
        const isNumberNotNull = number != null
        
        // Alternativa
        const isNumberNotNull = Boolean(number)
        ```
        
    - Conversão de número para String:
        
        ```jsx
        // Recomendado
        const numberAsString = String(number)
        ```
        

## Recomendações

- Utilize recursos que sejam mais comuns e legíveis para a maioria dos programadores.
- Evite usar Syntactic Sugars em excesso, especialmente em projetos colaborativos.
- Priorize a clareza e a legibilidade do código, mesmo que isso signifique escrever mais linhas.
- Utilize ferramentas de análise de código para identificar e remover Syntactic Sugars desnecessários.

## Recursos Adicionais

- Pesquise no Google por "Syntactic Sugars JavaScript" para encontrar mais exemplos.
- Aprenda sobre as melhores práticas de escrita de código para melhorar a legibilidade do seu código.

## Conclusão

Evitar o uso excessivo de Syntactic Sugars, isso pode tornar seu código mais fácil de ler e entender para outros programadores, o que pode levar a uma melhor colaboração e manutenção do código.
