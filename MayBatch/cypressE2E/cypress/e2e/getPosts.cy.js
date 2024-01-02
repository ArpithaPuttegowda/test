describe('GetPost Component', () => {
    it('displays posts from API', () => {
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
        fixture: 'posts.json', // Assume you have a fixture file with sample post data
      }).as('getPosts');
  
      cy.visit('http://localhost:3000'); // Assuming the component is rendered at the root URL
      cy.contains("Posts").click()
      cy.wait('@getPosts').then((interception) => {
        // Ensure the API request was made
        expect(interception.response.statusCode).to.eq(200);
  
        // Check if the post titles are displayed correctly
        cy.get('[data-testid=0]').should('have.text', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        cy.get('[data-testid=1]').should('have.text', 'qui est esse');
      });
    });
    it('displays data not found', () => {
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
        fixture: "noposts.json", // Assume you have a fixture file with sample post data
      }).as('getPosts');
  
      cy.visit('http://localhost:3000'); // Assuming the component is rendered at the root URL
      cy.contains("Posts").click()
      cy.wait('@getPosts').then((interception) => {
        // Ensure the API request was made
        expect(interception.response.statusCode).to.eq(200);
  
        // Check if the post titles are displayed correctly
       cy.get('[data-testid=dnf]').should("have.text","Data not found")
      });
    });
  
  });
  