Feature: Trello Feature

@login
   Scenario: Creating a new card
   Given I am on a Trello board with
   When I add a new card
   Then a new card should be added

@login
   Scenario: Creating a new list
   Given I dont know
   When I add a new list
   Then a new list should be added
