/// <reference types="cypress" />
Cypress.Commands.add('RegisterPage2', () => {
    cy.InputFakeEmailAndPassword()
    cy.ClickContinueButton()
})

Cypress.Commands.add('RegisterPage3', () => {
    cy.RegisterPage2()
    cy.Page2RegistrationEnterFakeDetails()
    cy.ClickContinueButtonInRegister()
})

Cypress.Commands.add('RegisterPage4', () => {
    cy.RegisterPage3()
    cy.EnterFakeDetailsPage3Registration()
    cy.ClickContinueButtonInRegister()
})

Cypress.Commands.add('SignUp', () => {
    cy.RegisterPage4()
    cy.ToggleTermsAndConditionsButton()
    cy.ClickContinueButtonInRegister()
})