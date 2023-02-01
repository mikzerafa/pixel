/// <reference types="cypress" />
import header from '../pom/Header'

Cypress.Commands.add('ClickRegister', () => {
    header.get.registerButton().click()
})