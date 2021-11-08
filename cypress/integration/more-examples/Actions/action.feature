Feature: Actions

    Test cases to try different actions offered by Cypress

    Scenario: Use .type()

        Given Sample Page
        Then Type email as "aarya@gmail.com"
        And Force write and check in textarea with text "Disable error checking"

    Scenario: Use .focus()
        Then Check if the input has orange focus color

    Scenario: Use .blur()
        Then Check if the input has red blur color

    Scenario: Use .clear()
        Then Write the text "Some random text" and use clear to check if the input gets cleared

    Scenario: Use .submit()
        Then Give the Coupon code as "HALFOFF"
        And Submit form and check if the form is submitted

    Scenario: Use .click()
        Then Toggle the Popover
        Then Use click with literals
        Then Use click with positions
        Then Use click multiple elements
        Then Use force click

    Scenario: Use .dblclick() and .rightclick()
        Then Do double click to edit
        Then Do right click to edit

    Scenario: Use .check()
        Then Check checkboxes which are not disabled
        And Check specific checkboxes
        Then Check specific radios

    Scenario: Use .select()
        Then Check initial select value
        Then Select "oranges" from select menu
        Then Select "bananas" from select menu
        Then Select multiple items from the select menu
