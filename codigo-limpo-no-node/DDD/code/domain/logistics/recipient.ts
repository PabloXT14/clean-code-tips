interface IRecipient {
  street: string
  number: number
  zipcode: string
}

export class Recipient {
  public street: string
  public number: number
  public zipcode: string

  constructor({ street, number, zipcode }: IRecipient) {
    this.street = street
    this.number = number
    this.zipcode = zipcode
  }
}