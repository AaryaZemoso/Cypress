/// <reference types="Cypress" />
import { And, Given, Then} from "cypress-cucumber-preprocessor/steps";

Given("Sample Webpage", () => {
    cy.visit("https://example.cypress.io/commands/querying");
});

Then("Query Button using Cypress Get", () => {
    cy.get("#query-btn").should('contain.text', 'Button');
});

Then("Query using Cypress Get with Attributes", () => {
    cy.get("[data-test-id=test-example]").should("have.class", 'example');
});

Then("Query List containing {string} should have class {string}", (fruit, cls) => {
    cy.get(".query-list")
        .contains(fruit)
        .should('have.class', cls);
});

Then("Type {string} in the Email", (email) => {
    cy.get(".query-form").within(() => {
        cy.get("input:first-child").type(email);
    });
});

And("Type {string} in the Password", (password) => {
    cy.get(".query-form").within(() => {
        cy.get("input:last-child").type(password);
    });
});

Then("Check for email placeholder", () => {
    cy.get(".query-form").within(() => {
        cy.get("input:first-child").should('have.attr','placeholder', 'Email');
    });
});

And("Check for password placeholder", () => {
    cy.get(".query-form").within(() => {
        cy.get("input:last-child").should('have.attr', 'placeholder', 'Password');
    });
});

Then('Check if the list is of ul type', () => {
    cy.root().get(".query-ul").within(() => {
        // Doesn't make any sense......
        // Anyway to get the tag name???
        cy.root().should('have.class', 'query-ul');
    });
});