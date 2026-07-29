describe('Example Cypress Site - Smoke Tests', () => {
  // Visit the site before each test
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('loads the homepage successfully', () => {
    // assert the URL is correct
    cy.url().should('include', 'example.cypress.io')

    // basic content sanity check
    cy.get('body').should('be.visible')
    cy.contains('Kitchen Sink').should('exist')
  })
})