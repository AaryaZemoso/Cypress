/// <reference types="Cypress" />
import { Given, Then} from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

Given("Amazon Home Page", () => {
    cy.visit(Cypress.env("url"));
});

Then("Select Today's Deals", () => {
    cy.get("#desktop-1 .a-cardui-header > a").click();
});

Then("Select Third Deal", () => {
    let third_deal = cy.get("div[data-testid='grid-deals-container'] > *").eq(2);
    third_deal.find("div[data-testid='deal-card'] > *:nth-child(4) > div").invoke('text').then((text) => {
        cy.log("Third deal of the day is " + text);
    });
});

When("I Search {string}", (product) => {
    cy.get("input[aria-label=Search]").clear().type(product + "{enter}");
});

Then("Close the Card Sidenav link", () => {
    cy.get("#attach-close_sideSheet-link").click();
});

Then("Select First Item", () => {
    cy.get("div[data-component-type=s-search-result]:not(.AdHolder)")
        .first()
        .find("h2 > a")
        .invoke("removeAttr", "target")
        .click();
});

Then("Select Last Item", () => {
    cy.get("div[data-component-type=s-search-result]:not(.AdHolder)")
        .last()
        .find("h2 > a")
        .invoke("removeAttr", "target")
        .click();
});

Then("Select Item {string}", (n) => {
    cy.get("div[data-component-type=s-search-result]:not(.AdHolder)")
        .eq(parseInt(n))
        .find("h2 > a")
        .invoke("removeAttr", "target")
        .click();
});

Then("Add to cart", () => {
    cy.get("#add-to-cart-button").click();

    cy.wait(5000);

    cy.get("body")
        .then(($body) => {
            let add_to_cart_sidenav = $body.find("#attach-close_sideSheet-link");
            if(add_to_cart_sidenav.length){
                cy.get("#attach-close_sideSheet-link").click();
            }
        });
});

Then("Select Cart", () => {
    cy.get("#nav-cart").click();
});

Then("Check No of products in cart as {string}", (noOfProducts) => {
    cy.get("div[data-name='Active Items'] > .sc-list-item").should('have.length', noOfProducts);
})

Then("Click on Mobile Tab", () => {
    cy.get("#nav-xshop").contains("Mobiles").click();
});

Then("Click on Prime Checkbox", () => {
    cy.get("#s-refinements > :nth-child(3) label").click();
});

Then("Log Delivery Date", () => {
    cy.get("#ddmDeliveryMessage > b").invoke("text").then((date) => {
        cy.log("Delivery Date is set to " + date);
    });
});