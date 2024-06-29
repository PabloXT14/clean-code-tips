import { Order } from "../domain/purchases/order"

interface SubmitOrdersRequest {
  customerDocument: string
  total: number
}

export class SubmitOrder {
  async execute({ customerDocument, total }: SubmitOrdersRequest) {
    const order = new Order({ total, customerDocument })

    // Persistir no banco de dados
  }
}