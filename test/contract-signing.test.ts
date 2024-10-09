import { UserEstonia } from '../src/user-estonia'
import { ContractEstonia } from '../src/contract-estonia'
import { UserLatvia } from '../src/user-latvia'
import { ContractLatvia } from '../src/contract-latvia'

describe('Test contract signing for Estonia', () => {
  let user: UserEstonia
  let contract: ContractEstonia

  beforeEach(() => {
    user = new UserEstonia('Tom', 'Jason', 17, 466778899, '+33345566', 'Estonia')
    contract = new ContractEstonia('Agreement')
  })

  test('Test that the contract cannot be signed if Mobile ID authorization is not activated', () => {
    contract.sign(user)
    expect(contract.signed).toBe(false)
  })
  test('Verify that after activating Mobile ID authorization, the contract can be successfully signed, and the signed status changes to true', () => {
    user.mobileIDAuthorization = true
    contract.sign(user)
    expect(contract.signed).toBe(true)
  })

  describe('Test contract signing for Latvia', () => {
    let user: UserLatvia
    let contract: ContractLatvia

    beforeEach(() => {
      user = new UserLatvia('Tom', 'Jason', 18, 466778899, '+33345566', 'Riga')
      contract = new ContractLatvia('Agreement-contract')
    })

    test('Test that the contract cannot be signed if Mobile ID authorization is not activated', () => {
      contract.sign(user)
      expect(contract.signed).toBe(false)
    })
    test('Verify that after activating Mobile ID authorization, the contract can be successfully signed, and the signed status changes to true', () => {
      user.activateEParakstsForLatvia = true
      contract.sign(user)
      expect(contract.signed).toBe(true)
    })
  })
})
