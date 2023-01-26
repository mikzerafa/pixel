import Fake from "./data/DummyData"

Cypress.Commands.add('EnterFakeEmail', { prevSubject: true }, (subject, ) => {
    return cy.wrap(subject).type(Fake.get.fakeEmail())
})

Cypress.Commands.add('EnterFakePassword', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakePassword())
})