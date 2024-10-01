Feature: Card Feature

  Scenario: Modifying workspace settings
  Given I am on the settings page
  When I update workspace details
  Then the workspace settings should be updated successfully

  Scenario: Editing the user profile
  Given I am on the settings page
  When I update my profile information
  Then my profile should reflect the updates