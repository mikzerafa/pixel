const get = {
    emailInput: () => cy.get('input[id="email"]'),
    passwordInput: () => cy.get('input[id="password"]')
}

export default {
    get
}