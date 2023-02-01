/// <reference types="cypress" />
Cypress.Commands.add('NavigateToHome', () => {
    cy.visit("")
})
Cypress.Commands.add('BypassLazyLoad', () => {
    for (let i = 500; i < 10000; i += 500) {
        cy.scrollTo(0, i)
        cy.wait(1)
    }
})

Cypress.Commands.add('ShouldBeLoggedIn', (wait) => {
    cy.wait(wait);
    cy.SessionStorageContainsValueInKey("reduxPersist:user", "loggedIn", true)
})

Cypress.Commands.add('DynamicUrlCheck', (contains, time = 10000, waitTime = 500) => {
    cy.url().then((url) => {
        if (url.includes(contains)) {
            cy.url().should('contain', contains)
        } else if (time > 0) {
            cy.wait(500)
            cy.DynamicUrlCheck(contains, time - waitTime, waitTime)
        } else {
            cy.url().should('contain', contains)
        }
    })
})