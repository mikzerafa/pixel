import Register from "./pom/Register"
import Fake from "./data/DummyData"


Cypress.Commands.add('HasEmailField', () => {
    Register.get.emailInput().IsVisible()
})

Cypress.Commands.add('HasPasswordField', () => {
    Register.get.passwordInput().IsVisible()
})

Cypress.Commands.add('ContinueButtonIsDisabled', () => {
    Register.get.continueButton().HasAttribute('disabled')
})

Cypress.Commands.add('EnterFakeEmail', () => {

})