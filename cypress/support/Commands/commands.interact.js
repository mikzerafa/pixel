import Lobby from '../pom/Lobby'
import 'cypress-real-events'

Cypress.Commands.add('ClickCasinoButton', () => {
    Lobby.get.casinoButton().eq(0).click()
})

Cypress.Commands.add('ClickEsportsButton', () => {
    Lobby.get.esportsButton().eq(0).click()
})

Cypress.Commands.add('SudoHover', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).realHover()
})