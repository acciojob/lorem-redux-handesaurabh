describe('React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('displays intro text', () => {
    cy.get('h1').should('contain', 'A short Naration of Lorem Ipsum');
    cy.get('h3').should('contain', 'Below Contains A title and Body gotten from a random API, Please take your time to Review');
  });

  it('should display loading state by default', () => {
    cy.get('h4').should('contain', 'Fetching data...');
  });

  it('should display posts after fetching from API', () => {
    // Wait for the API call to complete and data to be displayed
    cy.get('.grid-container', { timeout: 10000 }).should('exist');
    cy.get('.grid-item').should('have.length.gt', 0);
    cy.get('.title').first().should('contain', 'Title :');
    cy.get('.body').first().should('contain', 'Body :');
  });
});
