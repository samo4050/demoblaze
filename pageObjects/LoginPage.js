// loginPage.js

class LoginPage {
    static get usernameInput() {
        return cy.get('#loginusername');
    }

    static get passwordInput() {
        return cy.get('#loginpassword');
    }

    static get loginButton() {
        return cy.get('#logInModal .btn-primary');
    }

    static get welcomeMessage() {
        return cy.get('#nameofuser');
    }

    static get logoutButton() {
        return cy.get('#logout2');
    }

    static login(username, password) {
        // Enter the username

        if (credentials === "login1") {
            username = "hek";
            password = "hek";
        } else if (credentials === "login2") {
            username = "hek";
            password = "hek";
        }

        this.usernameInput.type(username);

        // Wait for 5 seconds before entering the password
        cy.wait(5000);

        // Enter the password
        this.passwordInput.type(password);

        // Click the login button
        this.loginButton.click();
    }
}

export default LoginPage;
