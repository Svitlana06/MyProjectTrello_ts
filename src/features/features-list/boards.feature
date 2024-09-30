Feature: Boards Feature


   Scenario: Creating a new board
   Given I"m on the boards page
   When I add a new board
   Then a new board should be created and displayed



  Scenario: Searching for the boards
  Given I am on the boards page
  And I seek the boards
  Then only necessary boards should be displayed