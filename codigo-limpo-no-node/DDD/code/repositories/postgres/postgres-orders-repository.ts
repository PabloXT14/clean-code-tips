import { Order } from "../../domain/purchases/order";
import { OrdersRepository } from "../orders-repository";

export class PostgresOrdersRepository implements OrdersRepository {
  create(order: Order): Promise<void> {
    // Salva o order(pedido) no banco
    return Promise.resolve()
  }
}