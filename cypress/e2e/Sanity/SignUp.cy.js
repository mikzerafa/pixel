describe('Sign Up Tests - SANITY', () => {
    beforeEach(() => {
        cy.NavigateToHome()
        cy.ClickRegister()
    })

    it('Should have Email and Password Field when Clicking on Registering lobby', () => {
        cy.HasEmailField()
        cy.HasPasswordField()
    })

    it('Should show page 2 after Entering details and clicking continue on Registration', () => {
        cy.RegisterPage2()
        cy.IsOnPage2OfRegistration()
    })

    it('Should show page 2 fields on Register when getting to page 2', () => {
        cy.RegisterPage2()
        cy.Page2RegistrationFieldsExist()

    })

    it('Shoud show page 3 after entering details on page 2 and clicking Continue on Register in lobby', () => {
        cy.RegisterPage2()
        cy.Page2RegistrationEnterFakeDetails()
        cy.ClickContinueButtonInRegister()
        cy.IsOnPage3Registration()
    })

    it('Should show page 3 fields on Register when getting to page 3', () => {
        cy.RegisterPage3()
        cy.Page3RegistrationFieldsExist()
    })

    it('Should show page 4 after entering details on page 3 and clicking continue on Register in Lobby', () => {
        cy.RegisterPage3()
        cy.EnterFakeDetailsPage3Registration()
        cy.ClickContinueButtonInRegister()
        cy.IsOnPage4Registration()
    })

    it('Should Show Toggle Buttons on Page 4 of Registration', () => {
        cy.RegisterPage4()
        cy.Page4RegistrationFieldsExist()
    })

    it('Should complete sign up process after clicking terms and conditions button in Registration Page 4', () => {
        cy.RegisterPage4()
        cy.ToggleTermsAndConditionsButton()
        cy.ClickContinueButtonInRegister()
        cy.ShouldBeLoggedIn(30000)
    })
})