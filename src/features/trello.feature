Feature: Trello Feature

@login
   Scenario: Creating a new card on a list
   Given I am on a Trello board with existing lists
   When I add a new card
   Then a new card should be added to the list

@login
   Scenario: Creating a new list
   Given I am on a Trello board
   When I add a new list
   Then a new list should be added to the board

@login
  Scenario: Modifying workspace settings
  Given I am on the workspace settings page
  When I update workspace details
  Then the workspace settings should be updated successfully
