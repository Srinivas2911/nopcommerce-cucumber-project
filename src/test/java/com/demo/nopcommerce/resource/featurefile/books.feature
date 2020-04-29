@Books
  Feature: Books Feature

  As a User I want to use the Books feature on nopcommmerce website.

  Scenario: Verify User can Navigate to Books Page
    Given I am on Home page
    When I click on the Books Link
    Then Verify I am on the Books Page Text

  Scenario: Verify User is Able to Find Books by Name A to Z in Ascending Order
    Given I am on Home page
    When I click on the Books Link
    And I select Name A to Z on Sort By Menu from Drop Down
    Then System displays Book names in A to Z alphabetical order

  Scenario: Verify User is Able to Find Books by Price Low to High Order
    Given I am on Home page
    When I click on the Books Link
    And I select Price Low to High on Sort By Menu from Drop Down
    Then System displays Book names Price Low to High order
