import cartPage from "../support/Pages/cartPage";
import ProductPage from "../support/Pages/productPage";
import LoginUtil from "../Utils/login";
// import LoginPage from "../support/Pages/loginPage";

describe('Add items to cart and checkout on products page',  function() {
  beforeEach( function() {
    cy.visit("https://www.saucedemo.com/")
    cy.fixture("cart.json").as("cartData")
    // cy.fixture("login.json").as("loginData")    
    LoginUtil.login("valid_login");
  })

  it ("verify that user is able to checkout", function() {
    const items = ProductPage.getCartItems();
    for (let i = 0; i < items.length; i++) {
        items[i].click();
    }

    cy.wait(2000)

    cartPage.elements.itemNumber().invoke("text").then((text) => {
        expect(text).to.equal("2")
    })

    cy.wait(2000)

    cartPage.clickCartLink();
    cy.wait(2000)
    cartPage.elements.backPackItem().should("exist");
    cartPage.elements.tShirtItem().should('exist');
    cy.wait(2000)
    cartPage.clickCheckOutBtn();
    cy.wait(2000)

    // LoginPage.login(this.loginData.userData.validUsername, this.loginData.userData.invalidPassword)

    cartPage.personalDetails(this.cartData.userData.firstName, this.cartData.userData.lastName, this.cartData.userData.zipCode);
    cy.wait(2000)
    cartPage.clickContinueBtn();

  })
})