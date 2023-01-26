describe('Sign Up Tests', () => {
    beforeEach(() => {
        cy.NavigateToHome()
    })

    it('Should have Email and Password Field when Clicking on Register', () => {
        cy.ClickRegister()
    })
})