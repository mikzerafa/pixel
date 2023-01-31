/// <reference types="cypress" />
Cypress.Commands.add('NavigateToHome', () => {
    cy.visit("")
})
Cypress.Commands.add('BypassLazyLoad', () => {
    for (let i = 500; i < 10000; i += 500) {
        cy.scrollTo(0, i)
        cy.wait(10)
    }
})

Cypress.Commands.add('ShouldBeLoggedIn', (wait) => {
    cy.wait(wait);
    cy.SessionStorageContainsValueInKey("reduxPersist:user", "loggedIn", true)
})