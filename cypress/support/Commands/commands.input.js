import Fake from "../data/DummyData"

Cypress.Commands.add('EnterFakeEmail', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakeEmail())
})

Cypress.Commands.add('EnterFakePassword', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakePassword())
})

Cypress.Commands.add('EnterFakeAddress', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakeAddress())
})

Cypress.Commands.add('EnterFakeCity', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakeCity())
})

Cypress.Commands.add('EnterFakePostCode', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakePostCode())
})

Cypress.Commands.add('EnterFakeFirstName', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakeFirstName())
})
Cypress.Commands.add('EnterFakeLastName', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakeLastName())
})

Cypress.Commands.add('EnterFakeDateOfBirthAbove18', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).type(Fake.get.fakeDateOfBirthAbove18())
})

Cypress.Commands.add('ToggleButton', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).click()
})