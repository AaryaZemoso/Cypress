/// <reference types="Cypress" />

describe("First test case", () => {

    it("Amazon - Add to cart", () => {

        cy.visit("www.amazon.in");

        cy.get("#twotabsearchtextbox").type("Oneplus{enter}");
        cy.get(".s-result-item").find('.a-link-normal.a-text-normal').eq(2).invoke('removeAttr', 'target').click();
        cy.get("#add-to-cart-button").click()

        cy.wait(4000);

        cy.get('#attach-sidesheet-view-cart-button').click();

        cy.get(".sc-list-item-content > *").should('have.length', 1);
                
    });
    
});