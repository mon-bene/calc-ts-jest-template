import { UserLatvia } from './user-latvia'

export class ContractLatvia {
  title: string
  signed: boolean

  constructor(title: string) {
    this.title = title
    this.signed = false
  }

  sign(user: UserLatvia): void {
    if (user.activateEParakstsForLatvia == true) {
      this.signed = true
    } else {
      this.signed = false
    }
  }
}
