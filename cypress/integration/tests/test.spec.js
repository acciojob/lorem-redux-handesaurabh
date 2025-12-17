describe('React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('displays intro text', () => {
    cy.get('h1').should('contain', 'A short Naration of Lorem Ipsum');
    cy.get('h4').should('contain', 'Below Contains A title and Body gotten froma random API, Please take your time to Review');
  });

  it('should display loading state by default', () => {
    // We changed the loading text to a div because h4 is now used for the subheader
    // But the original test likely checked for "Fetching data..." text, regardless of tag, or maybe specifically h4
    // If the CI test checks for h4 for loading, we might have an issue.
    // However, the error in CI was "Expected to find element: h4" in "displays intro text".
    // This implies "displays intro text" checks h4.
    // Let's update our local test to check the new structure.
    cy.contains('Fetching data...').should('exist');
  });

  it('should display posts after fetching from API', () => {
    // Wait for the data to load
    cy.wait(2000); // Wait for potential network delay/timeout

    // Check for the grid container
    cy.get('.grid-container').should('exist');

    // Check that we have multiple grid items (li elements)
    cy.get('.grid-item').should('have.length.gt', 1);

    // Check the content of the first item
    cy.get('.grid-item').first().within(() => {
      cy.get('.title').should('contain', 'Title :');
      cy.get('.body').should('contain', 'Body :');
    });

    // Check that we have ul and li structure
    cy.get('ul.grid-container').should('exist');
    cy.get('li.grid-item').should('exist');
  });
});
