// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './Commands/commands'
import './Commands/commands.navigate'
import './Commands/commands.assert'
import './Commands/Content/commands.content.register'
import './Commands/Content/commands.content.casino'
import './Commands/commands.input'
import './Commands/commands.interact'
import './Commands/commands.shortcut'
import './Commands/commands.storage'
import './Commands/DataValidation/commands.dataValidation'
import './Commands/DataValidation/commands.dataValidation.EmailField'


// Alternatively you can use CommonJS syntax:
// require('./commands')

import setupEmail from '../support/Commands/DataValidation/commands.dataValidation.EmailField'

describe('Setting up', () => {
    it('Email Validation Functions Setup', () => {

        setupEmail.setup.EmailFieldFunctions()
        cy.log('Emails setup')
    })
})