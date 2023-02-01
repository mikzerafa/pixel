import Lobby from '../pom/Lobby'

Cypress.Commands.add('ClickCasinoButton', () => {
    Lobby.get.casinoButton().eq(0).click()
})

Cypress.Commands.add('ClickEsportsButton', () => {
    Lobby.get.esportsButton().eq(0).click()
})