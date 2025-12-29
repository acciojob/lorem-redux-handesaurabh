describe('React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081'); // or wherever your app is running
  });

  it('displays intro text', () => {
    cy.get('.intro-text').should('contain', 'Below Contains A title and Body gotten froma random API, Please take your time to Review');
  });

  it('displays posts fetched from API', () => {
    // Wait for API to load
    cy.get('[data-testid="post-item"]').should('have.length.greaterThan', 0);
  });

  it('should display loading state by default', () => {
    // This test expects to see the loading state immediately when the page loads
    cy.get('[data-testid="loading"]').should('have.length', 1);
  });

  it('should display posts after fetching from API', () => {
    cy.get('[data-testid="post-item"]').should('have.length', 6);
  });
});