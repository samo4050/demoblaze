class ProductPage {
    get addToCartButton() {
        return cy.get('a').contains('Add to cart');
    }

    get cartButton() {
        return cy.get('#cartur');
    }

    addToCart() {
        this.addToCartButton.click();
    }

    goToCart() {
        this.cartButton.click();
    }
}

export default new ProductPage();
