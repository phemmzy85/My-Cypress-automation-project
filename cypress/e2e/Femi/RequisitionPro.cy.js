describe('RequisitionPro', () => {
  const email = 'emiglobalconsult@yopmail.com'
  const password = 'Test1234!'
  const baseUrl = 'https://app.requisitionpro.com'

  it('Login with username and password', () => {
    cy.visit(baseUrl)
    cy.get('[name="email"]').type(email)
    cy.get('[id="password"]').type(password)
    cy.get('[name="remember-me"]').check()
    cy.get('.group').click()
    cy.get('.shepherd-cancel-icon > span').should('be.visible').click()
    cy.get('body').click()








  })
})