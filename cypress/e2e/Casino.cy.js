const casinoCategories = ["Top Slots", "Live Casino", "New", "Feature Buy"];

describe('Casino tests', () => {
    before(() => {
        cy.NavigateToHome()
        cy.ClickCasinoButton()
    })
    describe('Each Category should have games in Casino Lobby', () => {
        casinoCategories.forEach((category) => {
            it(category + ' should have games', () => {
                cy.log(category)
            })
        })
    })
})