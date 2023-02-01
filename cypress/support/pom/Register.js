import 'cypress-iframe'

const get = {
    continueButton: () => { return cy.get('button[class$="register"]') },
    page1: {
        emailInput: () => { return cy.get('input[id="email"]') },
        passwordInput: () => cy.get('input[id="password"]'),
        emailValidator: () => get.page1.emailInput().parent().find('span').eq(0)
    },

    page2: {
        country: () => cy.get('input[name="countryCode"]'),
        city: () => cy.get('input[id="city"]'),
        address: () => cy.get('input[id="street"]'),
        postCode: () => cy.get('input[id="postCode"]'),
    },

    page3: {
        firstName: () => cy.get('input[id="firstName"]'),
        lastName: () => cy.get('input[id="lastName"]'),
        dateOfBirth: () => cy.get('input[name="dateOfBirth"]')
    },

    page4: { //Can we add data-testid's for the below?

        registrationDialogue: () => cy.get('div[role="dialog"]'),
        registrationContainer: () => get.page4.registrationDialogue().get('div[id="modalBody"]'),
        notificationsContainer: () => get.page4.registrationContainer().find('div[class="register-confirmation"]'),
        termsAndConditionsContainer: () => get.page4.registrationContainer().find('div[class="form-group "]').eq(1),
        notificationsToggleButton: () => get.page4.notificationsContainer().find('div[class="react-toggle-thumb"]'),
        termsAndConditionsToggleButton: () => get.page4.termsAndConditionsContainer().find('div[class="react-toggle-thumb"]'),
        notificationsText: () => get.page4.notificationsContainer().find('span'),
        termsAndConditionsText: () => get.page4.notificationsContainer().find('span')

    }

}

export default {
    get
}