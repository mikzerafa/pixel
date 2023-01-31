const get = {
    header: () => cy.get('header[id="pixel-header"]'),
    logoContainer: () => get.header().find('div[class="logo-container"]'),
    userSection: () => get.header().find('div[class="user-section"]'),
    loginButton: () => get.userSection().find('a[class*="login-button"]'),
    registerButton: () => get.userSection().find('a[class*="register-button"]'),
    pageTitle: () => get.userSection().find('div[class*="page-title"]'),
    burgerMenu: () => get.userSection().find('div[id*="nav-menu"]')
}

export default {
    get
}