import LoginPage from './loginPage';
import ProductPage from './ProductPage';

describe('Demoblaze Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com');
    });

    it('should login successfully and display welcome message', () => {
        // Use specified credentials with additional waits
        LoginPage.login('hek', 'hek');

        // Wait for the welcome message to appear
        LoginPage.welcomeMessage.should('contain', 'Welcome hek', { timeout: 8000 });

        // Check if modal is visible and click the close button if it is
        cy.get('.modal-content', { timeout: 8000 }).then(($modal) => {
            if ($modal.is(':visible')) {
                cy.get('.modal-footer > button').click(); // Adjust selector as necessary for the close button
            }
        });

        // Verify login-related options like "Log Out" are visible with a timeout
        LoginPage.logoutButton.should('be.visible', { timeout: 8000 });
    });

    it('should add a product to the cart and verify its presence', () => {
        // Ensure login first
        LoginPage.login('hek', 'hek');
        cy.wait(2000); // Adjust if additional time is needed for login

        // Navigate to a product page, e.g., 'Sony vaio i5'
        cy.get('a').contains('Laptops').click();
        cy.get('a').contains('Sony vaio i5').click();

        // Add product to cart and check the alert
        ProductPage.addToCart();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added');
        });

        // Navigate to the cart and verify product presence
        ProductPage.goToCart();
        cy.get('.success td').should('contain', 'Sony vaio i5');
    });
});
