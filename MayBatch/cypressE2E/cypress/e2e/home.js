describe('Home Page', () => {
    it('displays a list of items with completion toggling', () => {
      cy.visit('http://localhost:3000/'); // Adjust the URL as needed
      cy.contains('Home').click();
      cy.url().should('include', '/home');
      cy.contains('Welcome to the Home Page!'); 
      cy.contains('This is a simple React component with a list of items.');
  
      // Verify the initial state of the list
      cy.get('li').should('have.length', 3);
      cy.get('li').should('not.have.css', 'text-decoration', 'line-through');
  
      // Click on an item to mark it as completed
      cy.contains('Read a book').click();
      cy.get('li').first().should('have.css', 'text-decoration', 'line-through');
  
      // Click again to mark it as incomplete
      cy.contains('Read a book').click();
      cy.get('li').first().should('not.have.css', 'text-decoration', 'line-through');
    });
  });
  