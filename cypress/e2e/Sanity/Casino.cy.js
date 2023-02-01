import Casino from '../../support/pom/Casino'
const casinoCategories = ["Top Slots", "Live Casino", "New", "Feature Buy"];

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

            it(category + 'Should have play button on hover', () => {
                cy.Casino_OnHoverShouldHavePlayButton(category, 0)
            })

            it(category + " games chould link to url on click containing the word 'game'", () => {
                Casino.get.within.gameImage(category).eq(0).click({ force: true })
                cy.DynamicUrlCheck('game')
            })
        })
    })
})