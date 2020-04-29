@Login
Feature: Login functionality
  As a user I want to login into nop commerce website

  Scenario: User should navigate to login page successfully
    Given I am on Home page
    When I click on Login link
    Then I should navigate to login page successfully

  Scenario Outline: User should login successfully with valid credentials
    Given I am on Home page
    When I click on Login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should login successfully
    Examples:
      | email              | password  |
      | Roger123@gmail.com | Roger1980 |
      | jamesbond@aol.com  | bond123   |

  Scenario Outline: Verify the error message with invalid credentials
    Given I am on Home page
    When I click on Login link
    And  I enter invalid email "<username>"
    And  I enter password "<password>"
    And I click on login button
    Then I should see the error message
    Examples:
      | username   | password |
      | <username> | John123  |
      | <username> | bobby123 |
      | <username> | def123   |
      | <username> | mail123  |
      | <username> | test123  |
