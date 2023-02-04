import data from '../../data/DummyData'

const get = {
    add: () => Cypress.Commands.add,
    addClickButton: (buttonName) => get.add("Click" + buttonName + "Button", { prevSubject: true }, (subject) => {
        return cy.wrap(subject).click()
    }),
    addValidation: (category, toValidate, criteria, toPass = true) => Cypress.Commands.add(category + "Validation_" + toValidate + "_" + helper.if("ToPass", "ToFail", toPass), { prevSubject: true }, (subject) => {
        cy.log(category + "Validation_" + toValidate + "_" + helper.if("ToPass", "ToFail", toPass))
        cy.wrap(subject).clear().type(data.get.dummy(criteria))
        if (toPass) {
            cy.ValidateEmail_ToPass()
        } else {
            cy.ValidateEmail_ToFail()
        }

        return cy.wrap(subject)
    }),
    addEmailValidation: (toValidate, criteria, toPass = true) => get.addValidation("Email", toValidate, criteria, toPass)

}

const helper = {
    if: ((text, orText, mybool = true) => {
        if (mybool) {
            return text;
        } else {
            return orText;
        }
    })
}


//EmailValidation_TopLevelDomainLessThan2Chars_ToFail

export default {
    get
}