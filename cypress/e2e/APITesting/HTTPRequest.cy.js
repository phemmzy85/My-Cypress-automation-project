describe('API Request', ()=>{
it('GET Reques', ()=>{
cy.request('GET','http://localhost:3000/Employee/')
.its('status')
.should('eq',200)
})
it('POST Request', ()=>{
cy.request({
          method: 'POST',
          url: 'http://localhost:3000/Employee',
          body: {
          name: "Abj bolaji",
          email: "abolaji1@example.com",
          role: "Backend Developer",
          active: true,
          gender: "Male",
          state: "Lagos",
          country: "Nigeria"
}
})
.its('status')
.should('eq',201)
})
it('PUT Request', ()=>{
cy.request({
          method: 'PUT',
          url: 'http://localhost:3000/Employee/54',
          body: {
          name: "bj bolaji",
          email: "abolaji1@example.com",
          role: "Backend Developer",
          active: true,
          gender: "Male",
          state: "Lagos",
          country: "Nigeria"
}
})
.its('status')
.should('eq',200)
})
it('DELETE Request', ()=>{
cy.request({
          method: 'DELETE',
          url: 'http://localhost:3000/Employee/21',
          })
.its('status')
.should('eq',200)
})




})