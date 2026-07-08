describe('RequisitionPro', () => {
it('Login with username and password', () => {
cy.visit('https://app.requisitionpro.com')
cy.get('[name="email"]').type('emiglobalconsult@yopmail.com')
cy.xpath("//input[@id='password']").type('Test1234!')
cy.get('[name="remember-me"]').check()
cy.get('.group').click()
cy.wait(5000)
cy.get('.shepherd-cancel-icon > span').click()
cy.get('body').click()








  })
})