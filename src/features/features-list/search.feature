Feature: Boards Feature

@login
   Scenario: Searching for the boards
   Given I am on the boards page
   And I seek the boards
   Then only necessary boards should be displayed


