describe('React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('displays intro text', () => {
    cy.get('h1').should('contain', 'A short Naration of Lorem Ipsum');
    cy.get('h4').should('contain', 'Below Contains A title and Body gotten froma random API, Please take your time to Review');
  });

  it('should display loading state by default', () => {
    // Check for loading message using data-testid
    cy.get('[data-testid="loading-message"]').should('exist');
  });

  it('should display posts after fetching from API', () => {
    // Wait for the data to load with a longer timeout
    cy.wait(4000); // Increased wait time for CI environment

    // Check for the grid container using data-testid
    cy.get('[data-testid="grid-container"]').should('exist');

    // Check that we have one grid item
    cy.get('[data-testid="post-item"]').should('have.length', 1);

    // Check the content of the first item
    cy.get('[data-testid="post-item"]').first().within(() => {
      cy.get('[data-testid="post-title"]').should('contain', 'Title :');
      cy.get('[data-testid="post-body"]').should('contain', 'Body :');
    });

    // Also check traditional selectors for compatibility
    cy.get('ul.grid-container').should('exist');
    cy.get('li.grid-item').should('exist');
  });
});
