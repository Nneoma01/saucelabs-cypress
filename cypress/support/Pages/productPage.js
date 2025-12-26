class ProductPage {
    elements = {
        ProductLogo: () => cy.get('[data-test="title"] '),
        BackPack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        TShirt: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
    }

    getProductLogo() {
        return this.elements.ProductLogo(); 
    }

    getCartItems(){
        return [this.elements.BackPack(), this.elements.TShirt()]
    }
    
}

export default new ProductPage();