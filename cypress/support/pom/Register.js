const get = {
    emailInput: () => cy.get('input[id="email"]'),
    passwordInput: () => cy.get('input[id="password"]'),
    continueButton: () => cy.get('button[class$="register"]')
}

export default {
    get
}