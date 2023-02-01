describe('Sign Up Tests - Functional', () => {
    beforeEach(() => {
        cy.NavigateToHome()
        cy.ClickRegister()
    })

    it('Should have Continue button Disabled upon clicking register in Lobby', () => {
        cy.ContinueButtonIsDisabled()
    })

    it('Should have Continue button enabled when Entering Email and Password on Registration', () => {
        cy.InputFakeEmailAndPassword()
        cy.ContinueButtonIsEnabled()
    })
})