/// <reference types="Cypress" />
import { And, Given, Then} from "cypress-cucumber-preprocessor/steps";

Given("Sample Page", () => {
    cy.visit("https://example.cypress.io/commands/actions");
});

Then("Type email as {string}", (email) => {
    cy.get(".action-email")
        .type(email + "{selectall}{backspace}" + email, {delay: 100})
        .should("have.value", email);
});

And("Force write and check in textarea with text {string}", (text) => {
    cy.get(".action-disabled")
        .type(text, {force: true})
        .should('have.value', text);
});

Then("Check if the input has orange focus color", () => {
    cy.get(".action-focus").focus()
        .should("have.class", "focus")
        .prev()
        .should("have.attr", "style", "color: orange;");
});

Then("Check if the input has red blur color", () => {
    cy.get(".action-blur").type("Blur something").blur()
        .should("have.class", "error")
        .prev()
        .should("have.attr", "style", "color: red;");
});

Then("Write the text {string} and use clear to check if the input gets cleared", (text) => {
    cy.get(".action-clear")
        .type(text)
        .should("have.value", text)
        .clear()
        .should("have.value", "");
});

Then("Give the Coupon code as {string}", (coupon) => {
    cy.get(".action-form")
        .find("[type='text']").type(coupon)
});

And("Submit form and check if the form is submitted", () => {
    cy.get(".action-form").submit()
        .next().should("contain", "Your form has been submitted!");
});

Then("Toggle the Popover", () => {
    cy.get(".action-btn")
        .click()
        .next()
        .should("have.class", "popover");
});

Then("Use click with literals", () => {
    cy.get("#action-canvas").click();

    cy.get('#action-canvas').click('topLeft');
    cy.get('#action-canvas').click('top');
    cy.get('#action-canvas').click('topRight');
    cy.get('#action-canvas').click('left');
    cy.get('#action-canvas').click('right');
    cy.get('#action-canvas').click('bottomLeft');
    cy.get('#action-canvas').click('bottom');
    cy.get('#action-canvas').click('bottomRight');
});


Then("Use click with positions", () => {
    cy.get("#action-canvas").click(80, 100);
});

Then("Use click multiple elements", () => {
    cy.get(".action-labels > .label")
        .click({multiple: true});
});

Then("Use force click", () => {
    cy.get(".action-opacity > .btn")
        .click({force: true});
});

Then("Do double click to edit", () => {
    cy.get(".action-div")
        .dblclick()
        .should("not.be.visible");
    
    cy.get(".action-input-hidden")
        .should("be.visible");
});

Then("Do right click to edit", () => {
    cy.get(".rightclick-action-div")
        .rightclick()
        .should("not.be.visible");

    cy.get(".rightclick-action-input-hidden")
        .should("be.visible");
});

Then("Check checkboxes which are not disabled", () => {
    cy.get(".action-checkboxes [type='checkbox']")
        .not('[disabled]')
        .check().should("be.checked");
});

And("Check specific checkboxes", () => {
    cy.get(".action-multiple-checkboxes [type='checkbox']")
        .check(['checkbox1', 'checkbox2'])
        .should("be.checked");
});

Then("Check specific radios", () => {
    cy.get(".action-radios [type='radio']")
        .check("radio3", {force: true})
        .should("be.checked");
});

Then("Check initial select value", () => {
    cy.get(".action-select")
        .should("have.value", "--Select a fruit--");
});

Then("Select {string} from select menu", (fruit) => {
    cy.get(".action-select")
        .select(fruit);

    cy.get(".action-select")
        .should("have.value", "fr-" + fruit);
});

Then("Select multiple items from the select menu", () => {
    cy.get('.action-select-multiple')
        .select(['apples', 'oranges', 'bananas'])
        .invoke('val')
        .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
});