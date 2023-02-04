/// <reference types="cypress" />

Cypress.Commands.add('ValidateEmailField', { prevSubject: true }, (subject) => {
    //Rules:
    //*char*|| *num* || *Equals(=)* @ *char*||*num*.*char* *char* || *num* @*num* 
    //Email Max -> 200 Characters

    cy.wrap(subject).EmailValidation_TopLevelDomainLessThan2Chars_ToFail()
        //.EmailValidation_MissingUsername_ToFail()
        .EmailValidation_MissingAt_ToFail()
        .EmailValidation_MissingDomain_ToFail()
        .EmailValidation_MissingDot_ToFail()
        .EmailValidation_TopLevelDomainContainsNumber_ToFail()
        .EmailValidation_DomainContainsEquals_ToFail()
        .EmailValidation_TopLevelDomainContainsEquals_ToFail()
        .EmailValidation_ContainsSpecialCharacters_ToFail()
        .EmailValidation_MoreThan200Characters_ToFail()
        .EmailValidation_MinimumRequirements_ToPass()
        .EmailValidation_UsernameContainsNumber_ToPass()
        .EmailValidation_DomainContainsNumber_ToPass()
        .EmailValidation_UsernameContainsEqualsSymbal_ToPass()
        .EmailValidation_EmailContains200Characters_ToPass()
})

Cypress.Commands.add('ValidatePasswordField', { prevSubject: true }, (subject) => {

})