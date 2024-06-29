interface ICustomer {
  name: string
  email: string
  document: string
}

export class Customer {
  public name: string
  public email: string
  public document: string

  constructor({ name, email, document }: ICustomer) {
    this.name = name
    this.email = email
    this.document = document
  }
}
