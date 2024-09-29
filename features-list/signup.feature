Feature: Sign up Feature

  Scenario: Sign up for a new Trello account
  Given the Trello sign up page is displayed
  When I enter valid registration details
  And I set up a profile
  Then a new account should be created successfully
