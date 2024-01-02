describe('Menu Navigation', () => {
    it('navigates to About page', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('About').click();
      cy.url().should('include', '/about');
      cy.contains('This is the about page.');
    });
  
    it('navigates back to Home page', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('About').click();
      cy.contains('Home').click();
      cy.url().should('include', '/home');
      cy.contains('Welcome to the Home Page!'); 
    });
  
    // Add more test cases as needed for your application
  });
  