Cypress.Commands.add('IsVisible', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).should('be.visible')
})

Cypress.Commands.add('Exists', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).should('exist')
})

Cypress.Commands.add('HasAttribute', { prevSubject: true }, (subject, attr) => {
    return cy.wrap(subject).should('have.attr', attr)
})

Cypress.Commands.add('DoesNotHaveAttribute', { prevSubject: true }, (subject, attr) => {
    return cy.wrap(subject).should('not.have.attr', attr)
})