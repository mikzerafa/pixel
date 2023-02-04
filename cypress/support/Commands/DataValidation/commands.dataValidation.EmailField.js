/// <reference types="cypress" />
import Register from "../../pom/Register"
import gen from '../Generic/commands.generic'
import 'mocha'

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

//TESTS TO PASS

/*
    Test to Pass
    c@c.cc -> Pass (Minimum requirements for email)
    n@c.cc -> Pass (Username Contains Numbers)
    c@n.cc -> Pass (Domain Contains Number)
    =@c.cc -> Pass (Username contains Equals Symbal)
    (195)cccc...@c.cc (Email Contains 200 Characters)

*/




Cypress.Commands.add('ValidateEmail_ToPass', () => {
    Register.get.page1.emailValidator().ClassContainsFormInputValid()
})

Cypress.Commands.add('ValidateEmail_ToFail', () => {
    Register.get.page1.emailValidator().ClassDoesNotContainFormInputValid()
})

const setup = {
    EmailFieldFunctions: () => {
        gen.get.addEmailValidation('TopLevelDomainLessThan2Chars', "c@c.c", false)
        gen.get.addEmailValidation('MissingUsername', "@c.cc", false)
        gen.get.addEmailValidation('MissingAt', "cc.cc", false)
        gen.get.addEmailValidation("MissingDomain", "c@.cc", false)
        gen.get.addEmailValidation("MissingDot", "c@ccc", false)
        gen.get.addEmailValidation("TopLevelDomainContainsNumber", "c@c.nc", false)
        gen.get.addEmailValidation("DomainContainsEquals", "c@=.cc", false)
        gen.get.addEmailValidation("TopLevelDomainContainsEquals", "c@c.=c", false)
        gen.get.addEmailValidation("ContainsSpecialCharacters", "[c@c.cc", false)
        gen.get.addEmailValidation("MoreThan200Characters", 'c(196)@c.cc', false)

        gen.get.addEmailValidation('MinimumRequirements', 'c@c.cc')
        gen.get.addEmailValidation('UsernameContainsNumber', 'n@c.cc')
        gen.get.addEmailValidation('DomainContainsNumber', 'c@n.cc')
        gen.get.addEmailValidation('UsernameContainsEqualsSymbal', '=@c.cc')
        gen.get.addEmailValidation('EmailContains200Characters', "c(195)@c.cc")
    }

}

export default {
    setup
}