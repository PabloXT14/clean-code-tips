// SOLID
/*
  - SRP (Single Responsibility Principle)
  - OCP (Open-Closed Principle)
  - LSP (Liskov Substitution Principle)
  - ISP (Interface Segregation Principle)
  - DIP (Dependency Inversion Principle)
*/

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number
}

interface Card {
  number: number
  cvv: number
  expirationDate: Date
}

// Boleto
class Billet implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.1
  }
}

// Poderia implementar o Card aqui para aplicar o ISP
class Credit implements PaymentMethod {
  private installments: number

  constructor(installments: number) {
    this.installments = installments
  }
  getDiscountAmount(amount: number): number {
    if (this.installments === 1) {
      return amount * 0.05
    }

    if (this.installments <= 6) {
      return amount * 0.02
    }

    return 0
  }
}

class Debit implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.05
  }
}

class Pix implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.02
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod
  }

  public execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount)
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(6))

calculateOrderDiscount.execute(100)


/* ========================================================================== */


class SubmitOrderInvoice {
  public execute() {
    // emissão de fatura/nota
  }
}

class CreateOrder {
  public execute() {
    // CalculateOrderDiscount
    // SubmitOrderInvoice
  }
}