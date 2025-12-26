class LoginPage {
    elements = {
        LoginLogo: () => cy.get('.login_logo'),
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        LoginButton: () => cy.get('[data-test="login-button"]'),
        ErrorMessage: () => cy.get('.error-message-container')
    }

    getLoginLogo() {
        return this.elements.LoginLogo();
    }

    login(username, password){
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.LoginButton().click();
    }

    getErrorMessage() {
        return this.elements.ErrorMessage();

    }
}

export default new LoginPage();