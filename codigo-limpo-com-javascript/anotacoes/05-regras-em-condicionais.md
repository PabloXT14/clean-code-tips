# Regras em Condicionais

## Negação

- Evite negações em condicionais.
- Utilize variáveis descritivas para tornar a lógica mais clara.
- Exemplo:
    
    ```tsx
    const user = {
    	name: 'John Doe',
    	age: 18,
    }
    
    const isUserYoungeThan18Years = user.age < 18
    
    // checa se usuário é menor de idade
    if (isUserYoungeThan18Years) { ... }
    
    // AO INVÉS DE
    
    const isUserOlderThan18Years = user.age > 18
    
    // checa se usuário é menor de idade
    if (!isUserOlderThan18Years) { ... }
    ```
    

## Early Return vs Else

- Utilize `early return` para finalizar a função quando a condição for atendida.
- O `else` pode ser útil quando o `early return` não for claro.
- Evite encadear muitos `early returns` e `ifs`.
- Exemplo:
    
    ```tsx
    function doSomething() {
    	if (errorCondition) {
    		return {
    			status: 'error',
    			message: 'Error message'
    		}
    	}
    	
    	return {
    		status: 'success',
    		message: 'Success message'
    	}
    }
    ```
    

## Condicionais Aninhadas

- Evite aninhar condicionais (`if dentro de if`).
- Utilize um único `if` com várias condições ou separe as condições em `ifs` distintos.
- Exemplo:
    
    ```tsx
    if (age >= 18) { 
    	... 
    } else if (age === 18) {
    	...
    }
    
    // AO INVÉS DE
    
    if (age >= 18) {
    	if (age === 18) {
    		...
    	}
    }
    ```
    

## Dicas Extras

- Mantenha o código consistente e siga as boas práticas da linguagem de programação.
- Utilize comentários para explicar o código quando necessário.
- Teste o código para garantir que funcione corretamente.

## Benefícios

- Código mais legível e fácil de manter.
- Menor propensão a erros.
- Código mais robusto e flexível.

## Conclusão

Seguir estas regras de Clean Code para condicionais pode te ajudar a escrever código mais claro, eficiente e fácil de manter.
