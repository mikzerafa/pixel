import Register from "./pom/Register"


Cypress.Commands.add('HasEmailField', () => {
    Register.get.page1.emailInput().IsVisible()
})

Cypress.Commands.add('HasPasswordField', () => {
    Register.get.page1.passwordInput().IsVisible()
})

Cypress.Commands.add('ContinueButtonIsDisabled', () => {
    Register.get.page1.continueButton().HasAttribute('disabled')
})

Cypress.Commands.add('ContinueButtonIsEnabled', () => {
    Register.get.page1.continueButton().DoesNotHaveAttribute('disabled')
})

Cypress.Commands.add('ClickContinueButton', () => {
    Register.get.page1.continueButton().click()
})

Cypress.Commands.add('InputFakeEmailAndPassword', () => {
    Register.get.page1.emailInput().EnterFakeEmail()
    Register.get.page1.passwordInput().EnterFakePassword()
})

Cypress.Commands.add('IsOnPage2OfRegistration', () => {
    // Can be improved but just checking if country is visible for now
    Register.get.page2.country().Exists() //is blocked by css property from being visible
})

Cypress.Commands.add('EnterFakeEmail', { prevSubject: true }, (subject, ) => {
    return cy.wrap(subject).type(Fake.get.fakeEmail())
})