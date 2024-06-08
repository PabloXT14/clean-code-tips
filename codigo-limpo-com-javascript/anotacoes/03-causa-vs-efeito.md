# Causa VS Efeito

## Problema

* Desenvolvedores frequentemente nomeiam variáveis baseando-se no `efeito` que elas causam na interface, ao invés da `causa` real.
* Isso torna o código difícil de entender e modificar, pois a lógica fica obscurecida.

## Exemplo

* Variável `isButtonDisabled` indica se o botão está desabilitado, mas não a razão para isso.
* Se a variável for usada para outras finalidades (ex: mostrar mensagem de carregamento), o código fica confuso.

## Solução

* Nomeie variáveis pela `causa`, não pelo `efeito`.
* No exemplo, use `isFormSubmitting` para indicar o estado do envio do formulário.
* Isso torna o código mais claro e fácil de entender.

## Benefícios

* Código mais legível e fácil de manter.
* Maior facilidade para outros desenvolvedores entenderem a lógica do código.
* Redução de erros e bugs.

## Dicas

* Pense na `causa` por trás da variável, não apenas no `efeito` que ela causa.
* Use nomes descritivos e informativos.
* Evite abreviações e siglas que não sejam de conhecimento geral.

## Conclusão

* Nomear variáveis pela causa é uma prática importante para escrever código limpo e profissional.
* Isso facilita a leitura, a manutenção e a modificação do código, além de reduzir erros.
