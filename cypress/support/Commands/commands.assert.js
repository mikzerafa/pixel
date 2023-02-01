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

Cypress.Commands.add('Has1OrMore', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).should('have.length.at.least', 1)
})

Cypress.Commands.add('ClassContains', { prevSubject: true }, (subject, toContain) => {
    return cy.wrap(subject).should('have.class', toContain)
})

Cypress.Commands.add('ClassDoesNotContain', { prevSubject: true }, (subject, toNotContain) => {
    return cy.wrap(subject).should('not.have.class', toNotContain);
})

Cypress.Commands.add('ClassContainsFormInputValid', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).ClassContains('form-input-valid')
})

Cypress.Commands.add('ClassDoesNotContainFormInputValid', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).ClassDoesNotContain('form-input-valid')
})