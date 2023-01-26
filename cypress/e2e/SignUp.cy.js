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

    it.only('Should have Continue button enabled when Entering Email and Password', () => {
        cy.InputFakeEmailAndPassword()
        cy.ContinueButtonIsEnabled()
    })

    it('Should Show Country input after Entering details and clicking continue', () => {
        cy.InputFakeEmailAndPassword()
        cy.ClickContinueButton()
        cy.IsOnPage2OfRegistration()
    })
})