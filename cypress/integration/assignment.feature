Feature: Amazon Assignment

Test cases for the Cypress Zemoso Assignment

Scenario: Just Visit the page

Given Amazon Home Page
Then Select Today's Deals
Then Select Third Deal

Scenario: Add min quantities and verify the cart if the quantity is expected

Given Amazon Home Page
When I Search "Oneplus"
Then Select First Item
Then Add to cart
When I Search "Vivo"
Then Select Last Item
Then Add to cart
When I Search "Samsung"
Then Select Item "5"
Then Add to cart
Then Select Cart
Then Check No of products in cart as "3"

Scenario: Display Last Item Details

Given Amazon Home Page
When I Search "Oneplus"
Then Select Last Item

Scenario: Select the Amazon Delivery Checkbox and get the First Displayed Item Delivery Date

Given Amazon Home Page
Then Click on Mobile Tab
Then Click on Prime Checkbox
Then Select First Item
Then Log Delivery Date