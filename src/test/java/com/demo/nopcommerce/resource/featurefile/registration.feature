@Registration
  Feature:Register Functionality
  As a user I want to register on nop commerce

  Scenario: User should navigate to registration page successfully
    Given I am on Home page
    When I click on register link
    Then I should navigate to register page successfully


  Scenario Outline: User should register successfully
    Given I am on Home page
    When I click on register link
    And I click on Male Gender Radio Button
    And I enter first name "<firstName>"
    And I enter last name "<lastName>"
    And I enter date of birth "<date>"
    And I enter month of birth "<month>"
    And I enter year of birth "<year>"
    And I enter Email ID "<email>"
    And I enter company name "<companyName>"
    And I enter Password "<password>"
    And I enter confirm Password "<confirmPassword>"
    And I click on register Button
    Then I can register successfully
    Examples:
      | firstName | lastName | date | month   | year | email   | companyName | password | confirmPassword |
      | Roger     | Moore    | 1    | January | 1980 | <email> | Roger Intl  | Roger123 | Roger123        |
      | James     | Bond     | 10   | May     | 1960 | <email> | James Intl  | James123 | James123        |
      | Boris     | Johnson  | 11   | April   | 2019 | <email> | Boris Intl  | Test123  | Test123         |

  Scenario Outline: User should Not register successfully with Invalid Credentials
    Given I am on Home page
    When I click on register link
    And I click on Male Gender Radio Button
    And I enter first name "<firstName>"
    And I enter last name "<lastName>"
    And I enter date of birth "<date>"
    And I enter month of birth "<month>"
    And I enter year of birth "<year>"
    And I enter Email ID "<email>"
    And I enter company name "<companyName>"
    And I enter Password "<password>"
    And I enter confirm Password "<confirmPassword>"
    And I click on register Button
    Then System displays error message
    Examples:
      | firstName | lastName | date | month    | year | email   | companyName      | password | confirmPassword |
      | Roger     | Moore    | 1    | January  | 1980 | <email> | Roger Moore Intl | Roger123 | Roger123678     |
      | James     | Bond     | 10   | May      | 1960 | <email> | James Intl       | James123 | James78786      |
      | Boris     | Johnson  | 11   | April    | 2019 | <email> | Testing Intl     | Test123  | Test6767876     |
      | Bobby     | Trap     | 28   | February | 1975 | <email> | Bobby Trap       | Booby123 | Booby123456     |
      | Joseph    | McClare  | 30   | June     | 1983 | <email> | McClare Intl     | Jos123   | Joesph123       |
