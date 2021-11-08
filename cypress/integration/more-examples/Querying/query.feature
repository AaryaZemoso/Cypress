Feature: Cypress Querying

Tests to try different cypress querying techniques with the help of query

Scenario: Use cy.get()

Given Sample Webpage
Then Query Button using Cypress Get

Scenario: Use cy.get() only using attributes

Given Sample Webpage
Then Query using Cypress Get with Attributes

Scenario: Use cy.contains()

Given Sample Webpage
Then Query List containing "apples" should have class "first"
Then Query List containing "oranges" should have class "second"
Then Query List containing "bananas" should have class "third"


Scenario: Use .within()

Given Sample Webpage
Then Check for email placeholder
And Check for password placeholder
Then Type "aarya@gmail.com" in the Email
And Type "aarya" in the Password

Scenario: Use cy.root()

Given Sample Webpage
Then Check if the list is of ul type