Feature: General Settings Feature

@login
  Scenario: Modifying workspace settings
  Given I am on the workspace settings page
  When I update workspace details
  Then the workspace settings should be updated successfully
