import Casino from '../../pom/Casino'

Cypress.Commands.add('Casino_HoverOnGame', (category, index) => {
    return Casino.get.within.gameImage(category).eq(index).SudoHover()
})

Cypress.Commands.add('Casino_OnHoverShouldHavePlayButton', (category, index) => {
    cy.Casino_HoverOnGame(category, index).then(() => {
        Casino.get.within.playButton(category, index).should((playButton) => {
            let found = false;
            const classList = playButton[0].classList;

            for (let i = 0; i < classList.length; i++) {
                let className = classList[i].split('-')[0];
                if (className == "opacity") {
                    found = true;
                    let opacityValue = classList[i].split('-')[1]
                    i = classList.length;
                    cy.log('Asserting opacity value greater than 0 (' + opacityValue + ")")
                    chai.assert.isAbove(opacityValue, 0)
                }
            }

            if (!found) {
                cy.log('play button is not visible')
                chai.assert.equal(1, 0)
            }
        })
    })
})