describe('Drop Dwon', ()=>{
it('Test one', ()=>{
/*cy.visit('https://www.zoho.com/commerce/free-demo.html')
//cy.get('#zcf_users_1').select('Yes,I currently sell online')
cy.get("[name='CASECF13']")
    .should('be.visible')
    .select('Yes, I currently sell online')
})*/
 Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
  cy.visit('https://practice.expandtesting.com/dropdown')  
  cy.get('#dropdown').should('be.visible')
  .select('Option 2')

  cy.get('[name="country"]').should('be.visible')
  .select('Nigeria')

  cy.get("[class='form-control']").select('100')
cy.get('label').should('be.visible')
})

})
