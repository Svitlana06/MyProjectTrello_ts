Feature: Cards Feature

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