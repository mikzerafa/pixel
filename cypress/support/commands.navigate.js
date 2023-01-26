/// <reference types="cypress" />
import header from '../support/pom/Header'

Cypress.Commands.add('ClickRegister', () => {
    header.get.registerButton().click()
})