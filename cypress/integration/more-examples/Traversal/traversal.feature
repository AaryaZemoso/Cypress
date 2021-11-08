Feature: Traversal

    Tests with regards to using different Cypress traversal types

    Scenario: Use .children()

        Given Traversal Sample Webpage
        Then Check if the Active Breadcrumb is "Data"
        Then Check if all non-active breadcrumb has a tags

    Scenario: Use .closest()

        Given Traversal Sample Webpage
        Then Closest Ancestor is of list-group class

    Scenario: Use .eq()

        Given Traversal Sample Webpage
        Then Check if the element at position "3" is "sphynx"
        Then Check if the element at position "0" is "tabby"

    Scenario: Use .filter()

        Given Traversal Sample Webpage
        Then Check if the active nav element is "About"

    Scenario: Use .find()

        Given Traversal Sample Webpage
        Then Check if there are "7" a links in the pagination

    Scenario: Use .first() and .last()

        Given Traversal Sample Webpage
        Then Check if the First button has text "Link"
        And Check if the Last button has text "Submit"

    Scenario: Use .next() and .nextAll()  and .nextUntil()

        Given Traversal Sample Webpage
        Then Check if the "apples" is followed by "oranges"
        And Check if between "#fruits" and "#nuts" there are "7" elements
        And Check if after "carrots" we have 5 elements

    Scenario: Use .not()

        Given Traversal Sample Webpage
        Then Check if buttons which are not disabled not have attribute disabled

    Scenario: Use .siblings()

        Given Traversal Sample Webpage
        Then Check if not active elements are 2 in the nav