export class User {
  name: string
  surname: string
  phone: string
  address: string
  consentGiven: boolean | undefined

  constructor(name: string, surname: string, phone: string, address: string) {
    this.name = name
    this.surname = surname
    this.phone = phone
    this.address = address
  }
}
