import Register from '../../support/pom/Register'

describe('Sign Up Tests - DATA VALIDATION', () => {
    beforeEach(() => {
        cy.NavigateToHome()
        cy.ClickRegister()
    })

    it('Validate Email Field', () => {
        Register.get.page1.emailInput().ValidateEmailField()
    })
})