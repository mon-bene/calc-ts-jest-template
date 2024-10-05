import { User } from './user'

export class Processor {
  giveConsent(userInput: User): void {
    userInput.consentGiven = true
  }

  checkConsent(userInput: User): boolean {
    return userInput.consentGiven === true
  }

  checkAge(userInput: User, age: number): void {
    if (age >= 18) {
      userInput.consentGiven = true
    } else {
      userInput.consentGiven = false
    }
  }

  revokeConsent(userInput: User): void {
    userInput.consentGiven = true
  }
}
