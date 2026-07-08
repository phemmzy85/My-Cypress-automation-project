describe('Alerts popup', ()=>{
it('Js alert', ()=>{
cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
cy.get(':nth-child(1) > button').click()
cy.on('window:alert', (text)=>{
     expect(text).to.contain('I am a JS Alert');
    })
cy.get('#result').should('be.visible','You successfully clicked an alert')


})
})

