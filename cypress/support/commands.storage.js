const je = require('json-evolve/types/jsonEvolve.js').default;


Cypress.Commands.add('SessionStorageContainsValueInKey', (key, innerKey, value) => {
    cy.window()
        .then(window => {
            const sessionStorageItem = window.sessionStorage.getItem(key);
            print("Session Storage key: " + key + " contains key and value pair: " + innerKey + "/" + value)
            je.assert.SubsetContains(sessionStorageItem, innerKey, value)
        });
})

function print(value) {
    cy.log(value)
    console.log(value);
}