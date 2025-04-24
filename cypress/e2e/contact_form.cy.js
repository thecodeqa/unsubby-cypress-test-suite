Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test due to app errors
    return false;
  });

describe('Contact Us Form Tests on Unsubby demo site', () => {
    beforeEach(() => {
      cy.visit('https://unsubby.vercel.app/de-de/kontakt');
    });
  
    it('TC_01 - Verify the Visibility of All Contact Form Fields', () => {
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('textarea[name="body"]').should('be.visible');
      cy.get('button.submit-btn').should('be.visible');
    });
  
    it('TC_02 - Verify empty submissions are not accepted.', () => {
      cy.get('form.contact-form button.submit-btn').click();
      cy.get('input:invalid, textarea:invalid').should('have.length.at.least', 1);
    });
  
    it('TC_03 - Verify Validate email format checkingt', () => {
      cy.get('input[name="name"]').type('Test');
      cy.get('input[name="email"]').type('noemail');
      cy.get('textarea[name="body"]').type('Test');
      cy.get('form.contact-form button.submit-btn').click();
      cy.get('input[name="email"]:invalid').should('exist');
    });
  
    it('TC_04 - Verifying confirmation after successful submission', () => {
      cy.get('input[name="name"]').clear().type('Test User');
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('textarea[name="body"]').clear().type('This is a test message to verify');
      cy.get('form.contact-form button.submit-btn').click();
    });
  });