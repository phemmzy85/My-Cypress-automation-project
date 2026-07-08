const BASE_URL = 'http://localhost:3000/Employee';

const employeeData = {
  name: 'Abj bolaji',
  email: 'abolaji1@example.com',
  role: 'Backend Developer',
  active: true,
  gender: 'Male',
  state: 'Lagos',
  country: 'Nigeria'
};

describe('API Request', () => {
  it('GET Request', () => {
    cy.request('GET', `${BASE_URL}/`)
      .its('status')
      .should('eq', 200);
  });

  it('POST Request', () => {
    cy.request({
      method: 'POST',
      url: BASE_URL,
      body: employeeData
    })
      .its('status')
      .should('eq', 201);
  });

  it('PUT Request', () => {
    cy.request({
      method: 'PUT',
      url: `${BASE_URL}/54`,
      body: { ...employeeData, name: 'bj bolaji' }
    })
      .its('status')
      .should('eq', 200);
  });

  it('DELETE Request', () => {
    cy.request({
      method: 'DELETE',
      url: `${BASE_URL}/21`
    })
      .its('status')
      .should('eq', 200);
  });
});