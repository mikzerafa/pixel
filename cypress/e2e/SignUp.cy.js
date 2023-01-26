describe('Sign Up Tests', () => {
    beforeEach(() => {
        cy.NavigateToHome()
        cy.ClickRegister()
    })

    it('Should have Email and Password Field when Clicking on Registerin lobby', () => {
        cy.HasEmailField()
        cy.HasPasswordField()
    })

    it('Should have Continue button Disabled upon clicking register in Lobby', () => {
        cy.ContinueButtonIsDisabled()
    })


})