@Computers

  Feature: Computer Page Features
    As a user I want to use add products to a cart

    Scenario: Verify User is Able to navigate to Computers page
      Given I am on Home page
      When I click on Computers Link
      Then Verify Computers Text on the Computers Page

    Scenario: Verify Product Added To Your Wish List
      Given I am on Home page
      When I mouseHover on Computers Link
      And I click on Desktops Menu
      And I click on WishList button On Lenovo Idea Centre PC
      Then Verify System Displays Product Added to Your WishList Message

    Scenario: Verify Message Product Added to Your Shopping Cart
        Given I am on Home page
        When I mouseHover on Computers Link
        And I click on Desktops Menu
        And I click on Build Your Own Computer Link
        And I click on GB400 HDD Radio Button
        And I click on Build Your Computer Add Cart Button
        Then Verify System Displays Product Added to Shopping Cart Message

