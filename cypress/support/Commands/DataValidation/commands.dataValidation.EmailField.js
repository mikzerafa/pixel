/// <reference types="cypress" />
import Register from "../../pom/Register"
import data from '../../data/DummyData'

//Rules:
//*char*|| *num* || *Equals(=)* @ *char*||*num*.*char* *char* || *num* @*num* 
//Email Max -> 200 Characters
//NoSpecialCharacters => {}[]/\

//TESTS TO FAIL
/*
    Test to Fail
    c@c.c -> Fail (Top Level Domain less than 2 chars)
    @c.cc -> Fail (Missing Username before @)
    cc.cc -> Fail (Missing @)
    c@.cc -> Fail (Missing Domain)
    c@ccc -> Fail (Missing .)
    c@c.nc -> Fail (Top Level Domain contains number)
    c@=.cc -> Fail (Domain contains =)
    c@c.=c -> Fail (Top Level Domain Contains =)
    (196)ccccc...@c.cc -> Fail (email contains more than 200 characters)

*/

Cypress.Commands.add('ValidateEmail_ToPass', () => {
    Register.get.page1.emailValidator().ClassContainsFormInputValid()
})

Cypress.Commands.add('ValidateEmail_ToFail', () => {
    Register.get.page1.emailValidator().ClassDoesNotContainFormInputValid()
})

Cypress.Commands.add('EmailValidation_TopLevelDomainLessThan2Chars_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_TopLevelDomainLessThan2Chars_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('c@c.c'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_MissingUsername_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_MissingUsername_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('@c.cc'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_MissingAt_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_MissingAt_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('cc.cc'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)

})

Cypress.Commands.add('EmailValidation_MissingDomain_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_MissingDomain_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('c@.cc'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_MissingDot_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_MissingDot_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('c@ccc'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_TopLevelDomainContainsNumber_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_TopLevelDomainContainsNumber_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('c@c.nc'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_DomainContainsEquals_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_DomainContainsEquals_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('c@=.cc'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)

})

Cypress.Commands.add('EmailValidation_TopLevelDomainContainsEquals_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_TopLevelDomainContainsEquals_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('c@c.=c'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_ContainsSpecialCharacters_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_ContainsSpecialCharacters_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy(']c@c.cc'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_MoreThan200Characters_ToFail', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_MoreThan200Characters_ToFail')
    cy.wrap(subject).clear().type(data.get.dummy('c(196)@c.cc'))
    cy.ValidateEmail_ToFail()
    return cy.wrap(subject)
})


//TESTS TO PASS

/*
    Test to Pass
    c@c.cc -> Pass (Minimum requirements for email)
    n@c.cc -> Pass (Username Contains Numbers)
    c@n.cc -> Pass (Domain Contains Number)
    =@c.cc -> Pass (Username contains Equals Symbal)
    (195)cccc...@c.cc (Email Contains 200 Characters)

*/

Cypress.Commands.add('EmailValidation_MinimumRequirements_ToPass', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_MinimumRequirements_ToPass')
    cy.wrap(subject).clear().type(data.get.dummy('c@c.cc'))
    cy.ValidateEmail_ToPass()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_UsernameContainsNumber_ToPass', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_UsernameContainsNumber_ToPass')
    cy.wrap(subject).clear().type(data.get.dummy('n@c.cc'))
    cy.ValidateEmail_ToPass()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_DomainContainsNumber_ToPass', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_DomainContainsNumber_ToPass')
    cy.wrap(subject).clear().type(data.get.dummy('c@n.cc'))
    cy.ValidateEmail_ToPass()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_UsernameContainsEqualsSymbal_ToPass', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_UsernameContainsEqualsSymbal_ToPass')
    cy.wrap(subject).clear().type(data.get.dummy('=@c.cc'))
    cy.ValidateEmail_ToPass()
    return cy.wrap(subject)
})

Cypress.Commands.add('EmailValidation_EmailContains200Characters_ToPass', { prevSubject: true }, (subject) => {
    cy.log('EmailValidation_EmailContains200Characters_ToPass')
    cy.wrap(subject).clear().type(data.get.dummy('c(195)@c.cc'))
    cy.ValidateEmail_ToPass()
    return cy.wrap(subject)
})