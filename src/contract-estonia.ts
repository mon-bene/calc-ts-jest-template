import { UserEstonia } from './user-estonia'

export class ContractEstonia {
  title: string
  signed: boolean

  constructor(title: string) {
    this.title = title
    this.signed = false
  }

  sign(user: UserEstonia): void {
    if (user.mobileIDAuthorization == true) {
      this.signed = true
    } else {
      this.signed = false
    }
  }
}
