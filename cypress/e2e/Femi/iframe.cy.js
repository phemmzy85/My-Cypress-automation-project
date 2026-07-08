describe('Check iframe plugin', () => {
  it('verifies iframe commands exist', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('#mce_0_ifr')
    cy.iframe('#mce_0_ifr').find('p').should('exist')
  })

  /*it('type on the iframe', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('#mce_0_ifr');
    cy.iframe('#mce_0_ifr').clear().type('Abolaji');
  })*/
})
