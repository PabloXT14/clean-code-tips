import { Order } from "../domain/purchases/order"
import { OrdersRepository } from "../repositories/orders-repository"

interface SubmitOrdersRequest {
  customerDocument: string
  total: number
}

export class SubmitOrder {
  constructor(private ordersRepository: OrdersRepository) { }

  async execute({ customerDocument, total }: SubmitOrdersRequest) {
    const order = new Order({ total, customerDocument })

    this.ordersRepository.create(order)
  }
}