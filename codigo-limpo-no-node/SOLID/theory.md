# Princípios SOLID

## **O que são os princípios SOLID?**

- São cinco princípios de design de software orientados a objetos que visam facilitar a compreensão, o desenvolvimento e a manutenção do software.
- Os princípios são:
    - Single Responsibility Principle (SRP) - Princípio da Responsabilidade Única: Cada classe ou entidade deve ter uma única responsabilidade.
    - Open Closed Principle (OCP) - Princípio Aberto/Fechado: As classes devem estar abertas para extensão, mas não para modificação.
    - Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov: Deve ser possível substituir uma classe por outra sem alterar o comportamento do programa.
    - Interface Segregation Principle (ISP) - Princípio da Segregação de Interface: As interfaces devem ser pequenas e específicas.
    - Dependency Inversion Principle (DIP) - Princípio da Inversão de Dependência: As dependências devem ser injetadas, não criadas internamente.

## S - Single Responsibility Principle (Princípio da Responsabilidade Única)

Cada classe deve ter uma única responsabilidade ou propósito.

```tsx
// Antes
class User {
  constructor(
	  public name: string,
	  public email: string
	) {}

  sendEmail(message: string) {
    // código para enviar email
  }
}

// Depois
class User {
  constructor(
	  public name: string,
	  public email: string
	) {}
}

class EmailService {
  sendEmail(email: string, message: string) {
    // código para enviar email
  }
}

const user = new User('John Doe', 'john.doe@example.com');
const emailService = new EmailService();
emailService.sendEmail(user.email, 'Hello John!');

```

## O - Open/Closed Principle (Princípio do Aberto/Fechado)

Classes devem estar abertas para extensão, mas fechadas para modificação.

```tsx
// Antes
class Rectangle {
  constructor(
	  public width: number,
	  public height: number
	) {}

  area() {
    return this.width * this.height;
  }
}

// Depois
abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(
	  public width: number,
	  public height: number
	) {
    super();
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes: Shape[] = [
  new Rectangle(10, 20),
  new Circle(10)
];

shapes.forEach(shape => {
  console.log(shape.area());
});

```

## L - Liskov Substitution Principle (Princípio da Substituição de Liskov)

Subtipos devem ser substituíveis por seus tipos base.

```tsx
// Antes
class Bird {
  fly() {
    console.log('Flying');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Penguins cannot fly');
  }
}

// Depois
abstract class Bird {
  abstract move(): void;
}

class Sparrow extends Bird {
  move() {
    console.log('Flying');
  }
}

class Penguin extends Bird {
  move() {
    console.log('Swimming');
  }
}

const birds: Bird[] = [
  new Sparrow(),
  new Penguin()
];

birds.forEach(bird => {
  bird.move();
});

```

## I - Interface Segregation Principle (Princípio da Segregação de Interface)

Clientes não devem ser forçados a depender de interfaces que não utilizam.

```tsx
// Antes
interface Animal {
  eat(): void;
  fly(): void;
  swim(): void;
}

class Dog implements Animal {
  eat() {
    console.log('Dog is eating');
  }

  fly() {
    throw new Error('Dogs cannot fly');
  }

  swim() {
    console.log('Dog is swimming');
  }
}

// Depois
interface Eater {
  eat(): void;
}

interface Flyer {
  fly(): void;
}

interface Swimmer {
  swim(): void;
}

class Dog implements Eater, Swimmer {
  eat() {
    console.log('Dog is eating');
  }

  swim() {
    console.log('Dog is swimming');
  }
}

class Bird implements Eater, Flyer {
  eat() {
    console.log('Bird is eating');
  }

  fly() {
    console.log('Bird is flying');
  }
}

```

## D - Dependency Inversion Principle (Princípio da Inversão de Dependência)

Dependa de abstrações, não de implementações.

```tsx
// Antes
class MySQLDatabase {
  connect() {
    console.log('Connecting to MySQL Database');
  }
}

class UserService {
  private db: MySQLDatabase;

  constructor() {
    this.db = new MySQLDatabase();
  }

  getUser(id: number) {
    this.db.connect();
    // código para obter usuário
  }
}

// Depois
interface Database {
  connect(): void;
}

class MySQLDatabase implements Database {
  connect() {
    console.log('Connecting to MySQL Database');
  }
}

class UserService {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  getUser(id: number) {
    this.db.connect();
    // código para obter usuário
  }
}

const mySQLDatabase = new MySQLDatabase();
const userService = new UserService(mySQLDatabase);
userService.getUser(1);

```

## **Por que os princípios SOLID são importantes?**

- Eles podem ajudar a criar software mais:
    - Compreensível
    - Fácil de desenvolver
    - Fácil de manter
    - Flexível
    - Robusto
    - Testável

## **Como aplicar os princípios SOLID na prática?**

- O vídeo demonstra como aplicar os princípios SOLID usando exemplos de código em JavaScript/TypeScript.
- É importante lembrar que os princípios SOLID não são regras rígidas, mas sim diretrizes que devem ser adaptadas às necessidades específicas de cada projeto.

## **Observações importantes**

- O vídeo menciona que os princípios SOLID podem ser difíceis de entender e aplicar isoladamente.
- É importante estudar os princípios em conjunto e entender como eles se relacionam entre si.
- O vídeo também menciona que os princípios SOLID não são essenciais para escrever código limpo, mas podem ajudar a criar código ainda melhor.

## **Recursos adicionais**

- Documentação 
  - https://simple.wikipedia.org/wiki/SOLID_%28object-oriented_design%29
- Tutorial:  
    - [Single Responsibility Principle Explained - SOLID Design Principles](https://www.youtube.com/watch?v=UQqY3_6Epbg&list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9)
  