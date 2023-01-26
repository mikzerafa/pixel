import Lobby from '../support/pom/Lobby'

Cypress.Commands.add('ClickCasinoButton', () => {
    Lobby.get.casinoButton().click()
})

Cypress.Commands.add('ClickEsportsButton', () => {
    Lobby.get.esportsButton().click()
})