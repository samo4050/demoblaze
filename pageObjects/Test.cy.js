import LoginPage from "./LoginPage";

describe('Test', () => {
    it('Test login with valid creds', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const loginPage = new LoginPage()
        loginPage.login('Admin', 'admin123');
        loginPage.assertSuccessfulLogin()
        cy.get().contains('#oxd-text oxd-text--span oxd-main-menu-item--name').click();
        });

    });