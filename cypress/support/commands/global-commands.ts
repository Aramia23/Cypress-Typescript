Cypress.Commands.add('checkUrl', () => {
    cy.visit('/')
    cy.url().should('include', 'index.html')
    cy.get('h1').should('have.text','todos')
})

export{}
declare global {
      namespace Cypress {
        interface Chainable {
         checkUrl(): Chainable<void>
        }
      }
}
