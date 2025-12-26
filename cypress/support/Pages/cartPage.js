class cartPage {
    elements = {
        itemNumber: () => cy.get('[data-test="shopping-cart-badge"]'),
        cartLink: () => cy.get('[data-test="shopping-cart-link"]'),
        checkOutBtn: () => cy.get('[data-test="checkout"]'),
        backPackItem: () => cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'),
        tShirtItem: () => cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]'),
        firstNameField: () => cy.get('[data-test="firstName"]'),
        lastNameField: () => cy.get('[data-test="lastName"]'),
        zipCodeField: () => cy.get('[data-test="postalCode"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        // finishBtn: () => cy.get('[data-test="finish"]')
    }

    clickCartLink() {
        this.elements.cartLink().click();
    }

    clickCheckOutBtn()  {
        this.elements.checkOutBtn().click();
    }

    personalDetails(firstName, lastName, zipCode){
        this.elements.firstNameField().type(firstName);
        this.elements.lastNameField().type(lastName);
        this.elements.zipCodeField().type(zipCode);
        // this.elements.finishBtn().click();
    }

    clickContinueBtn()  {
        this.elements.continueBtn().click();
    }
}

export default new cartPage();