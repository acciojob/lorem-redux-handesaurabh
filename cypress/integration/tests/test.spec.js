describe('React App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('displays intro text', () => {
    cy.contains('h1', 'Lorem Ipsum').should('be.visible');
  });

  it('displays posts fetched from API', () => {
    // Wait for loading to finish
    cy.get('[data-testid="loading"]', { timeout: 1000 }).should('not.exist');
    
    // Verify posts are displayed
    cy.get('[data-testid="post-item"]', { timeout: 5000 }).should('have.length.greaterThan', 0);
    cy.get('[data-testid="post-title"]').first().should('be.visible');
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
    
    // Verify post content
    cy.get('[data-testid="post-title"]').should('contain', 'Lorem');
    cy.get('[data-testid="post-body"]').should('be.visible');
  });
});
