describe('Assertions demo', function(){
it('Implicit Assertions', function(){
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.url().should('include','orangehrmlive.com')
.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.and('contain','orangehrmlive')
.and('not.contain','orrangehrmliive')
cy.title().should('include','OrangeHRM')
.should('not.contain','oorangehrm')
.and('eq','OrangeHRM')
cy.get('.orangehrm-login-branding > img').should('exist')
.should('be.visible')
cy.get('.orangehrm-login-logo > img').should('exist')
cy.xpath('//a').should('have.length','5')
cy.get('[name="username"]').type('Admin')
cy.get('[name="username"]').should('not.have.value','admin')
cy.get('[name="username"]').should('have.value','Admin')
})

it('Explicit Assertions', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]',).type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()

    })
})


