const get = {
    page1: {
        emailInput: () => { return cy.get('input[id="email"]') },
        passwordInput: () => cy.get('input[id="password"]'),
        continueButton: () => cy.get('button[class$="register"]')
    },

    page2: {
        country: () => cy.get('input[name="countryCode"]')
    }

}

export default {
    get
}