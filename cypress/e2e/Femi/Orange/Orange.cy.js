/// <reference types="cypress" />
// ensure cypress-xpath plugin is loaded in support/index.js or import here if needed
import 'cypress-xpath'

describe('OrangeHRM - Login and basic checks', () => {
    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

    beforeEach(() => {
        cy.visit(url)
        cy.xpath('//input[@name="username"]', { timeout: 15000 }).should('be.visible').clear().type('Admin')
        cy.xpath('//input[@name="password"]', { timeout: 15000 }).should('be.visible').clear().type('admin123')
        cy.xpath('//button[@type="submit"]', { timeout: 15000 }).should('be.enabled').click()
        // wait for dashboard to load
        cy.xpath("//h6[normalize-space()='Dashboard']", { timeout: 15000 }).should('be.visible')
    })

    it('captures homepage screenshot', () => {
        // ensure main layout is visible before taking screenshot
        cy.get('.oxd-layout-context', { timeout: 15000 }).should('be.visible')
        cy.screenshot('Homepage')
    })

    it('validates key elements and navigation', () => {
        // brand banner should be visible
        cy.get("img[alt='client brand banner']", { timeout: 15000 }).should('be.visible')

        // verify main content area
        cy.get('.oxd-layout-context', { timeout: 15000 }).should('be.visible')

        // navigate to Admin and back
        cy.xpath("//span[normalize-space()='Admin']", { timeout: 15000 }).should('be.visible').click()
        // confirm we navigated away from dashboard
        cy.get('h6', { timeout: 15000 }).should('not.contain', 'Dashboard')
        cy.go('back')
        cy.xpath("//h6[normalize-space()='Dashboard']", { timeout: 15000 }).should('be.visible')
        // reload and assert still on dashboard
        cy.reload()
        cy.xpath("//h6[normalize-space()='Dashboard']", { timeout: 15000 }).should('be.visible')
        })
})
