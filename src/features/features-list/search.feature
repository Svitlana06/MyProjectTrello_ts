Feature: Boards Feature


@login
   Scenario: Creating a new board
   Given I am on the boards page
   When I add a new board
   Then a new board should be created and displayed
   
@login   
   Scenario: Searching for the boards
   Given I am on the boards page
   When I seek the boards
   Then only necessary boards should be displayed


