interface IOrder {
  total: number
  customerDocument: string
}

export class Order {
  public total: number
  public createdAt: Date
  public customerDocument: string

  constructor({ total, customerDocument }: IOrder) {
    this.total = total
    this.createdAt = new Date()
    this.customerDocument = customerDocument
  }
}