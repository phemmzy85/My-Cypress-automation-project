describe('Suit 1', () => {
beforeEach('Login with usernmae and password', function () {
    cy.visit('https://www.saucedemo.com')
    cy.title().should('eq','Swag Labs')
    cy.get('#user-name').type('error_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})

    it('test 1 assestion', ()=> {
    cy.contains('Products').should('be.visible')
    cy.contains('$').should('be.visible')     
  })

it('test 2 app logo should be visible', () => {
    cy.get('.app_logo').should('be.visible')
})

it('test 3, click on the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="cancel"]').click()
})

it('Negative test', function () {
    cy.contains('$').should('be.visible')
     cy.contains('$').should('be.visible')//negative testS
 })

})
