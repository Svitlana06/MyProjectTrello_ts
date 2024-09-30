Feature: Cards Feature
  
@login
   Scenario: Creating a new card on a list
   Given I am on a Trello board with existing lists
   When I add a new card
   Then a new card should be added to the list


