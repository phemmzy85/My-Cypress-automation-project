describe('Check Box', function(){
it('Radio Check', function(){
cy.visit('https://artoftesting.com/samplesiteforselenium')
/*cy.xpath("//input[@id='female']").should('be.visible')
.check()
cy.xpath("//input[@value='Automation']").should('not.be.checked')
.click()*/

//cy.get("[type='radio']").click()

cy.get("[type='radio']").check({ multiple: true }).should('be.visible')


cy.get('#ConfirmBox > button')
  .should('have.css', 'background-color')

  cy.get('#ConfirmBox > button')
  .should('have.css', 'background-color', 'rgb(40, 118, 153)')

cy.get('#ConfirmBox > button')
  .should('be.visible')
  .and('not.be.disabled')



})
})