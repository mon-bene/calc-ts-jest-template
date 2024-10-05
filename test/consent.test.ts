import { Processor } from '../src/processor'
import { User } from '../src/user'

describe('Test for consent', () => {
  let user: User
  let processor: Processor

  beforeEach(() => {
    user = new User('Tom', 'Jonson', '+370543', 'Vilnius')
    processor = new Processor()
  })

  test('Not processed user should initially have undefined consent', () => {
    expect(user.consentGiven).toBeUndefined()
  })

  test('Processor can give consent to user', () => {
    processor.giveConsent(user)
    expect(user.consentGiven).toBe(true)
  })

  test('Verify fail consent when it is not given', () => {
    expect(processor.checkConsent(user)).toBe(false)
  })
})
