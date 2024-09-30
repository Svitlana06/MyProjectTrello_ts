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

@login
   Scenario: Filter cards
   Given I am on a Trello board with multiple cards
   When I apply a filter for specific criteria
   Then only cards matching the criteria should be displayed

@login
  Scenario: Modifying workspace settings
  Given I am on the workspace settings page
  When I update workspace details
  Then the workspace settings should be updated successfully

@login
  Scenario: Editing the user profile
  Given I am on the profile settings page
  And I update my profile information
  Then my profile should reflect the updates