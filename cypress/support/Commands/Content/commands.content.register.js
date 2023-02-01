import Register from "../../pom/Register"


Cypress.Commands.add('HasEmailField', () => {
    Register.get.page1.emailInput().IsVisible()
})

Cypress.Commands.add('HasPasswordField', () => {
    Register.get.page1.passwordInput().IsVisible()
})

Cypress.Commands.add('ContinueButtonIsDisabled', () => {
    Register.get.continueButton().HasAttribute('disabled')
})

Cypress.Commands.add('ContinueButtonIsEnabled', () => {
    Register.get.continueButton().DoesNotHaveAttribute('disabled')
})

Cypress.Commands.add('ClickContinueButton', () => {
    Register.get.continueButton().click()
})

Cypress.Commands.add('InputFakeEmailAndPassword', () => {
    Register.get.page1.emailInput().EnterFakeEmail()
    Register.get.page1.passwordInput().EnterFakePassword()
})

Cypress.Commands.add('IsOnPage2OfRegistration', () => {
    cy.Page2RegistrationFieldsExist()
})

Cypress.Commands.add('Page2RegistrationFieldsExist', () => {
    Register.get.page2.country().Exists()
    Register.get.page2.address().Exists()
    Register.get.page2.city().Exists()
    Register.get.page2.postCode().Exists()
})

Cypress.Commands.add('Page2RegistrationEnterFakeDetails', () => {
    Register.get.page2.address().EnterFakeAddress()
    Register.get.page2.city().EnterFakeCity()
    Register.get.page2.postCode().EnterFakePostCode()
})

Cypress.Commands.add('ClickContinueButtonInRegister', () => {
    Register.get.continueButton().click()
})

Cypress.Commands.add('Page3RegistrationFieldsExist', () => {
    Register.get.page3.firstName().Exists()
    Register.get.page3.lastName().Exists()
    Register.get.page3.dateOfBirth().Exists()
})

Cypress.Commands.add('IsOnPage3Registration', () => {
    cy.Page3RegistrationFieldsExist()
})

Cypress.Commands.add('EnterFakeDetailsPage3Registration', () => {
    Register.get.page3.firstName().EnterFakeFirstName()
    Register.get.page3.lastName().EnterFakeLastName()
    Register.get.page3.dateOfBirth().EnterFakeDateOfBirthAbove18()
})

Cypress.Commands.add('Page4RegistrationFieldsExist', () => {
    Register.get.page4.notificationsToggleButton().Exists()
    Register.get.page4.notificationsText().Exists()
    Register.get.page4.termsAndConditionsToggleButton().Exists()
    Register.get.page4.termsAndConditionsToggleButton().Exists()
})

Cypress.Commands.add('IsOnPage4Registration', () => {
    cy.Page4RegistrationFieldsExist()
})

Cypress.Commands.add('ToggleTermsAndConditionsButton', () => {
    Register.get.page4.termsAndConditionsToggleButton().ToggleButton()
})

Cypress.Commands.add('Casino_HoverOnGame', (category, index) => {

})