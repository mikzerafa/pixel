import Casino from '../support/pom/Casino'
const casinoCategories = ["Top Slots", "Live Casino", "New", "Feature Buy"];
const topSlotsApi = "/games/category/TopSlots*"

describe('Casino tests', () => {
    beforeEach(() => {
        cy.NavigateToHome()
        cy.ClickCasinoButton()
        cy.wait(3000)
        cy.BypassLazyLoad()
    })
    describe('Each Category should have games in Casino Lobby', () => {
        casinoCategories.forEach((category) => {
            it(category + ' should have games', () => {
                Casino.get.within.gameImage(category).Has1OrMore().eq(0).IsVisible()
            })
        })
    })
})