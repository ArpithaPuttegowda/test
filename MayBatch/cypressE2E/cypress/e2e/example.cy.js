describe('Counter App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Update with the actual URL of your app
  });

  it('should display the heading', () => {
    cy.get('[data-testid=heading]').should('have.text', 'Counter');
  });

  it('should increment the count when the + button is clicked', () => {
    cy.get('[data-testid="input-data"]').type("1")
    cy.get('[data-testid="inc-btn"]').click();
    cy.get('[data-testid="count"]').should('have.text', '1');
  });

  it('should decrement the count when the - button is clicked', () => {
    cy.get('[data-testid="input-data"]').type("1")
    cy.get('[data-testid="dec-btn"]').click();
    cy.get('[data-testid="count"]').should('have.text', '-1');
  });

  it('should update the count based on input value', () => {
    cy.get('[data-testid="input-data"]').type('5');
    cy.get('[data-testid="inc-btn"]').click();
    cy.get('[data-testid="count"]').should('have.text', '5');
  });

  it('should handle negative input values when decrementing', () => {
    cy.get('[data-testid="input-data"]').type('3');
    cy.get('[data-testid="dec-btn"]').click();
    cy.get('[data-testid="dec-btn"]').click();
    cy.get('[data-testid="count"]').should('have.text', '-6');
  });

  it('should handle floating-point input values when incrementing', () => {
    cy.get('[data-testid="input-data"]').type('2.5');
    cy.get('[data-testid="inc-btn"]').click();
    cy.get('[data-testid="count"]').should('have.text', '2.5');
  });
});
