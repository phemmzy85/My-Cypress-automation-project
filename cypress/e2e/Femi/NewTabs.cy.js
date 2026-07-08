describe('TABS', ()=>{
it('Target Element',()=>{
cy.visit('http://the-internet.herokuapp.com/windows')
cy.xpath("//a[normalize-space()='Click Here']").invoke('removeAttr','target').click();
cy.wait(6000)
cy.url().should('include','http://the-internet.herokuapp.com/windows/new')
cy.go(-1)
})
})