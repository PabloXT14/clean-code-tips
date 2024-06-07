# Código Limpo em Booleanos


## Booleanos

São variáveis que armazenam estados da aplicação ou de alguma informação. Eles podem ser `true` ou `false`.

## Nomenclatura de Booleanos

Devem ser escritos como se fossem uma pergunta, onde a resposta pode ser sim ou não.

## Exemplo de Nomenclatura

Em vez de `userMajority`, use `isUserOnMajority`. O prefixo `is` indica que a variável é um booleano.

## Prefixos para Booleanos

Além de `is`, outros prefixos como `does` e `has` podem ser usados para indicar que a variável é um booleano.

## Uso de Booleanos em Condicionais

Booleanos são comumente usados em condicionais. Por exemplo, `if isDisabled` traz uma legibilidade diferente 
do que simplesmente `if disabled`.

## Semântica

Booleanos devem ser sempre como perguntas e o mais semântico possível. Por exemplo, em vez de `loading`, use 
`isLoading`.

## Evite Variáveis Genéricas

Evite nomes de variáveis genéricos como `loading`, `disabled`, etc. Em vez disso, use nomes mais específicos 
e menos genéricos. Por exemplo, `isUserProfileLoading`.

## Verificação de Booleanos

Para verificar se um booleano está escrito de maneira adequada, leia o booleano sempre com um `if` na 
frente. Se a leitura continuar semântica e seguindo as regras da gramática, então está correto.
