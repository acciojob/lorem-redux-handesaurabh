describe('React App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('displays intro text', () => {
    cy.get('h1').should('contain', 'A short Naration of Lorem Ipsum');
  });

  it('displays posts fetched from API', () => {
    // Wait for loading to finish
    cy.get('[data-testid="loading"]', { timeout: 1000 }).should('not.exist');
    
    // Verify posts are displayed
    cy.get('[data-testid="post-item"]', { timeout: 5000 }).should('have.length.greaterThan', 0);
    cy.get('.title').first().should('be.visible');
  });

  it('should display loading state by default', () => {
    // Intercept the fetch to delay response and check loading state
    cy.intercept('GET', '**/posts', (req) => {
      req.destroy(); // Block the request to keep loading state visible
    }).as('getPostsBlocked');
    
    // Reload to trigger the blocked request
    cy.reload();
    
    // Check loading indicator appears
    cy.get('[data-testid="loading"]', { timeout: 1000 }).should('be.visible');
  });

  it('should display posts after fetching from API', () => {
    // Wait for posts to load
    cy.get('[data-testid="post-item"]', { timeout: 10000 }).should('have.length.greaterThan', 0);
    
    // Verify post content is visible
    cy.get('.title').should('be.visible');
    cy.get('.body').should('be.visible');
  });
});
