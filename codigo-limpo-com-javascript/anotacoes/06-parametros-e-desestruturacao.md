# Parâmetros e Desestruturação

## Introdução

- O vídeo aborda o problema de repassar informações entre funções em código JavaScript.
- Isso é comum em aplicações back-end, como ao criar um usuário.
- A informação inicial (nome, email, senha) passa por várias funções até chegar ao repositório.

## Problema

- A cada repasse, a informação perde contexto e fica difícil de entender.
- A tipagem estática (com TypeScript) ajuda, mas não garante que os dados estejam corretos em produção.

## Solução

- **Desestruturação:**
    - Permite extrair propriedades de objetos e vetores em variáveis separadas.
    - Ex:
        
        ```tsx
        function createUserRoute(body) {
        	const { name, email, password } = body
        	
        	createUserContoller({
        		name,
        		email,
        		password,
        	})
        }
        ```
        
    - Torna o código mais legível e evita ambiguidade.
- **Objetos como parâmetros**
    - Prefira objetos a múltiplos parâmetros soltos.
    - Ex:
        
        ```tsx
        // EVITE
        // Pois se precisarmos de mais um parâmetro ou valor futuramente, será necessário realizar alteração em todos os locais que chamaram a função para não quebrar o nosso código
        function createUserRoute(body, params) { ... }
        
        createUserRoute(
        	{ name, email, password },
        	{ id: 1}
        )
        
        // RECOMENDADO
        function createUserRoute({ body, params }) { ... }
        
        createUserRoute({
        	body: { name, email, password },
        	params: { id: 1 },
        })
        ```
        
    - Use desestruturação para acessar propriedades dentro da função.
    - Ex:
        
        ```tsx
        function createUserRoute({ body, params }) {
        	const { name, email, password } = body
        	const { id } = params
        }
        ```
        
- **Objetos como retorno:**
    - Facilita a adição de novas informações no futuro.
    - Ex:
        
        ```tsx
        function createUser({ data }) {
        	const { name, email, password }
        	
        	const user = await createUserRepository({
        		name,
        		email,
        		password,
        	})
        	
        	return {
        		user,
        		message: "User created",
        	}
        }
        ```
        

## Benefícios

- Código mais legível e extensível.
- Maior clareza sobre o fluxo de dados.
- Menor propensão a erros e necessidade de refatoração.

## Observações

- Use nomes descritivos para variáveis e propriedades.
- Combine desestruturação com tipagem estática para máxima segurança.
- Aplique em funções e retornos de funções em geral.

## Conclusão

- A desestruturação e o uso de objetos como parâmetros e retornos são boas práticas para escrever código JavaScript mais limpo, legível e extensível.

