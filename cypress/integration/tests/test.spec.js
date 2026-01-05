describe('React App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('should display loading state by default', () => {
        // Check immediately after page load
        cy.get('[data-testid="loading"]', { timeout: 1000 }).should('exist');
    });

    it('displays intro text', () => {
        cy.get('.intro-text').should('contain', 'Below Contains A title and Body gotten froma random API, Please take your time to Review');
    });

    it('should display posts after fetching from API', () => {
        cy.get('[data-testid="post-item"]').should('have.length', 6);
    });

    it('displays posts fetched from API', () => {
        cy.get('[data-testid="post-item"]').should('have.length.greaterThan', 0);
    });
});