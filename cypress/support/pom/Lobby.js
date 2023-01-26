const get = {
    esportsButton: () => cy.get('a[href$="/bet-esports"]'),
    casinoButton: () => cy.get('a[href$="/casino"]')
}

export default {
    get
}