Feature: Trello Feature

@login_on_the_site
    Scenario: Modifying workspace settings
    Given I am on the workspace settings page
    When I update workspace details
    Then the workspace settings should be updated successfully

@login_on_the_site
   Scenario: Creating a new board
   Given I am on the boards page
   When I add a new board
   Then a new board should be created and displayed

@login_on_the_site
   Scenario: Creating a new card on a list
   Given I am on the existing board
   When I add a new card
   Then a new card should be added to the list

@login_on_the_site
   Scenario: Creating a new list
   Given I am on the existing board
   When I add a new list
   Then a new list should be added to the board

@login_on_the_site
  Scenario: Editing the user profile
  Given I am on the profile settings page
  And I update my profile information
  Then my profile should reflect the updates

@login_on_the_site
   Scenario: Filter cards
   Given I am on the existing board
   When I apply a filter for specific criteria
   Then only cards matching the criteria should be displayed

@login_on_the_site
  Scenario: Searching for the boards
  Given I am on the boards page
  When I seek the boards
  Then only necessary boards should be displayed


  Scenario: Sign up for a new Trello account
  Given the Trello sign up page is displayed
  When I enter valid registration details
  And I set up a profile
  Then a new account should be created successfully