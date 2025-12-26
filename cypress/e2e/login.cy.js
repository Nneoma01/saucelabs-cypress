import LoginPage from "../support/Pages/loginPage";
import ProductPage from "../support/Pages/productPage";

describe('Login Page Tests',  function() {
  beforeEach( function() {
    cy.visit("https://www.saucedemo.com/")
    cy.fixture("login.json").as("loginData")
  })

  it ( 'Verify user cannot login in with invalid credentials', function() {
    cy.wait(2000)
    LoginPage.getLoginLogo().should("exist") 
    LoginPage.login(this.loginData.userData.invalidUsername, this.loginData.userData.invalidPassword)
    LoginPage.getErrorMessage().invoke("text").then((text) => {
      expect(text).to.include("Epic sadface: Username and password do not match any user in this service")
    })
  })
  
  it ( 'Verify user cannot login in with invalid username and valid password', function() {
    cy.wait(2000)
    LoginPage.getLoginLogo().should("exist") 
    LoginPage.login(this.loginData.userData.invalidUsername, this.loginData.userData.validPassword)
    LoginPage.getErrorMessage().invoke("text").then((text) => {
      expect(text).to.include("Epic sadface: Username and password do not match any user in this service")
    })
  })

  it ( 'Verify user cannot login in with valid username and invalid password', function() {
    cy.wait(2000)
    LoginPage.getLoginLogo().should("exist") 
    LoginPage.login(this.loginData.userData.validUsername, this.loginData.userData.invalidPassword)
    LoginPage.getErrorMessage().invoke("text").then((text) => {
      expect(text).to.include("Epic sadface: Username and password do not match any user in this service")
    })
  })

  it ( 'Verify user can login in with vaild credentials', function() {
    cy.wait(2000)
    LoginPage.getLoginLogo().should("exist") 
    LoginPage.login(this.loginData.userData.validUsername, this.loginData.userData.validPassword)
    cy.wait(2000)
    ProductPage.getProductLogo().should("exist") 
  })

})