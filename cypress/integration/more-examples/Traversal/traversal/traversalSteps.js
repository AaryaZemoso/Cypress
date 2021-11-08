/// <reference types="Cypress" />
import { And, Given, Then} from "cypress-cucumber-preprocessor/steps";

Given("Traversal Sample Webpage", () => {
    cy.visit("https://example.cypress.io/commands/traversal");
});

Then("Check if the Active Breadcrumb is {string}", (value) => {
    cy.get(".traversal-breadcrumb")
        .children(".active")
        .should('have.text', value);
});

Then("Check if all non-active breadcrumb has a tags", () => {
    cy.get(".traversal-breadcrumb")
        .children(":not(.active)")
        .each((ele) => {
            cy.wrap(ele)
                .should('have.length', 1)
        });
});

Then("Closest Ancestor is of list-group class", () => {
    cy.get(".traversal-badge")
        .closest("ul")
        .should("have.class", "list-group");
})

Then("Check if the element at position {string} is {string}", (idx, value) => {
    cy.get(".traversal-list > li")
        .eq(idx)
        .should('have.text', value);
});

Then("Check if the active nav element is {string}", (value) => {
    cy.get(".traversal-nav > li")
        .filter(".active")
        .should("contain", value);
});

Then("Check if there are {string} a links in the pagination", (value) => {
    cy.get(".traversal-pagination")
        .find("li")
        .find("a")
        .should("have.length", value);
});

Then("Check if the First button has text {string}", (value) => {
    cy.get(".traversal-buttons > .btn")
        .first()
        .should("contain", value);
});

And("Check if the Last button has text {string}", (value) => {
    cy.get(".traversal-buttons > .btn")
        .last()
        .should("contain", value);
});

Then("Check if the {string} is followed by {string}", (current, next) => {
    cy.get(".healthy-foods")
        .contains(current)
        .next()
        .should('contain', next);
});

And("Check if between {string} and {string} there are {string} elements", (start, end, n) => {
    cy.get(".healthy-foods")
        .find(start)
        .nextUntil(end)
        .should("have.length", n); 
});

And("Check if after {string} we have {int} elements", (current, n) => {
    cy.get(".healthy-foods")
        .contains(current)
        .nextAll()
        .should('have.length', n);
});

Then("Check if buttons which are not disabled not have attribute disabled", () => {
    cy.get(".traversal-disabled > button")
        .not("[disabled]")
        .should("have.not.attr", "disabled");
});

Then("Check if not active elements are {int} in the nav", (n) => {
    cy.get(".traversal-pills .active")
        .siblings()
        .should("have.length", n);
}); 