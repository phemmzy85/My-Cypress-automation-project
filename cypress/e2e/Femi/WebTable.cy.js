describe('Web Tables', () => {
  const TABLE_URL = 'https://the-internet.herokuapp.com/tables';

  beforeEach('Load the tables page', () => {
    cy.visit(TABLE_URL);
  });

  it('should verify table structure', () => {
    cy.get('table').should('exist');
  });

  it('should verify table headers', () => {
    cy.get('table thead').should('be.visible');
  });

  it('should verify table body rows', () => {
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });

  it('should verify table data cells', () => {
    cy.get('table tbody td').should('be.visible');
  });
});