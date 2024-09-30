Feature: Boards Feature

@login
   Scenario: Creating a new board
   Given I"m on the boards page
   When I add a new board
   Then a new board should be created and displayed

@login
   Scenario: Searching for the boards
   Given I am on the boards page
   And I seek the boards
   Then only necessary boards should be displayed

@login
   Scenario: Creating a new card on a list
   Given I am on a Trello board with existing lists
   When I add a new card
   Then a new card should be added to the list

@login
   Scenario: Filter cards
   Given I am on a Trello board with multiple cards
   When I apply a filter for specific criteria
   Then only cards matching the criteria should be displayed

@login
   Scenario: Creating a new list
   Given I am on a Trello board with existing lists
   When I add a new list
   Then a new list should be added to the board