$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/resource/featurefile/books.feature");
formatter.feature({
  "line": 2,
  "name": "Books Feature",
  "description": "\r\nAs a User I want to use the Books feature on nopcommmerce website.",
  "id": "books-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Books"
    }
  ]
});
formatter.before({
  "duration": 17565443700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User can Navigate to Books Page",
  "description": "",
  "id": "books-feature;verify-user-can-navigate-to-books-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the Books Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify I am on the Books Page Text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 244378900,
  "status": "passed"
});
formatter.match({
  "location": "MyBooksStepdefs.iClickOnTheBooksLink()"
});
formatter.result({
  "duration": 2052193700,
  "status": "passed"
});
formatter.match({
  "location": "MyBooksStepdefs.verifyIAmOnTheBooksPageText()"
});
formatter.result({
  "duration": 241910100,
  "status": "passed"
});
formatter.after({
  "duration": 2314536300,
  "status": "passed"
});
formatter.before({
  "duration": 13301630500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify User is Able to Find Books by Name A to Z in Ascending Order",
  "description": "",
  "id": "books-feature;verify-user-is-able-to-find-books-by-name-a-to-z-in-ascending-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on the Books Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I select Name A to Z on Sort By Menu from Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System displays Book names in A to Z alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.match({
  "location": "MyBooksStepdefs.iClickOnTheBooksLink()"
});
formatter.result({
  "duration": 1507665500,
  "status": "passed"
});
formatter.match({
  "location": "MyBooksStepdefs.iSelectNameAToZOnSortByMenuFromDropDown()"
});
formatter.result({
  "duration": 1050127100,
  "status": "passed"
});
formatter.match({
  "location": "MyBooksStepdefs.systemDisplaysBookNamesInAToZAlphabeticalOrder()"
});
formatter.result({
  "duration": 509826900,
  "status": "passed"
});
formatter.after({
  "duration": 1412840700,
  "status": "passed"
});
formatter.before({
  "duration": 12739788700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify User is Able to Find Books by Price Low to High Order",
  "description": "",
  "id": "books-feature;verify-user-is-able-to-find-books-by-price-low-to-high-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on the Books Link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select Price Low to High on Sort By Menu from Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "System displays Book names Price Low to High order",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "MyBooksStepdefs.iClickOnTheBooksLink()"
});
formatter.result({
  "duration": 2228451600,
  "status": "passed"
});
formatter.match({
  "location": "MyBooksStepdefs.iSelectPriceLowToHighOnSortByMenuFromDropDown()"
});
formatter.result({
  "duration": 1664812300,
  "status": "passed"
});
formatter.match({
  "location": "MyBooksStepdefs.systemDisplaysBookNamesPriceLowToHighOrder()"
});
formatter.result({
  "duration": 617896900,
  "status": "passed"
});
formatter.after({
  "duration": 1436352200,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resource/featurefile/computer.feature");
formatter.feature({
  "line": 3,
  "name": "Computer Page Features",
  "description": "As a user I want to use add products to a cart",
  "id": "computer-page-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Computers"
    }
  ]
});
formatter.before({
  "duration": 13033443500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User is Able to navigate to Computers page",
  "description": "",
  "id": "computer-page-features;verify-user-is-able-to-navigate-to-computers-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computers Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify Computers Text on the Computers Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 58200,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iClickOnComputersLink()"
});
formatter.result({
  "duration": 1339694300,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.verifyComputersTextOnTheComputersPage()"
});
formatter.result({
  "duration": 392901400,
  "status": "passed"
});
formatter.after({
  "duration": 1569310700,
  "status": "passed"
});
formatter.before({
  "duration": 13472205500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify Product Added To Your Wish List",
  "description": "",
  "id": "computer-page-features;verify-product-added-to-your-wish-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I mouseHover on Computers Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops Menu",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on WishList button On Lenovo Idea Centre PC",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify System Displays Product Added to Your WishList Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iMouseHoverOnComputersLink()"
});
formatter.result({
  "duration": 293497600,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iClickOnDesktopsMenu()"
});
formatter.result({
  "duration": 1786970600,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iClickOnWishListButtonOnLenovoIdeaCentrePC()"
});
formatter.result({
  "duration": 440948700,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.verifySystemDisplaysProductAddedToYourWishListMessage()"
});
formatter.result({
  "duration": 417041600,
  "status": "passed"
});
formatter.after({
  "duration": 2023919200,
  "status": "passed"
});
formatter.before({
  "duration": 12824037900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Message Product Added to Your Shopping Cart",
  "description": "",
  "id": "computer-page-features;verify-message-product-added-to-your-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I mouseHover on Computers Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops Menu",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Build Your Own Computer Link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on GB400 HDD Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Build Your Computer Add Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify System Displays Product Added to Shopping Cart Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 43800,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iMouseHoverOnComputersLink()"
});
formatter.result({
  "duration": 257621300,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iClickOnDesktopsMenu()"
});
formatter.result({
  "duration": 1989818300,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iClickOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 2201351800,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iClickOnGB400HDDRadioButton()"
});
formatter.result({
  "duration": 202151700,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.iClickOnBuildYourComputerAddCartButton()"
});
formatter.result({
  "duration": 186528400,
  "status": "passed"
});
formatter.match({
  "location": "MyCompStepdefs.verifySystemDisplaysProductAddedToShoppingCartMessage()"
});
formatter.result({
  "duration": 1185453000,
  "status": "passed"
});
formatter.after({
  "duration": 1425100400,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resource/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "As a user I want to login into nop commerce website",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 14424045000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 951100,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1297462100,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 86395500,
  "status": "passed"
});
formatter.after({
  "duration": 1441053000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 18,
      "id": "login-functionality;user-should-login-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Roger123@gmail.com",
        "Roger1980"
      ],
      "line": 19,
      "id": "login-functionality;user-should-login-successfully-with-valid-credentials;;2"
    },
    {
      "cells": [
        "jamesbond@aol.com",
        "bond123"
      ],
      "line": 20,
      "id": "login-functionality;user-should-login-successfully-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13036814600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"Roger123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"Roger1980\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1763683400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyLoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 600644500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger1980",
      "offset": 18
    }
  ],
  "location": "MyLoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 280596700,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 22648190000,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 101595200,
  "status": "passed"
});
formatter.after({
  "duration": 1485814800,
  "status": "passed"
});
formatter.before({
  "duration": 13078681800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"jamesbond@aol.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"bond123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1970525700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jamesbond@aol.com",
      "offset": 15
    }
  ],
  "location": "MyLoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 435231400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bond123",
      "offset": 18
    }
  ],
  "location": "MyLoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 420622800,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 22550809800,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 119579000,
  "status": "passed"
});
formatter.after({
  "duration": 1551351400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter invalid email \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "\u003cusername\u003e",
        "John123"
      ],
      "line": 31,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "\u003cusername\u003e",
        "bobby123"
      ],
      "line": 32,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "\u003cusername\u003e",
        "def123"
      ],
      "line": 33,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "\u003cusername\u003e",
        "mail123"
      ],
      "line": 34,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;5"
    },
    {
      "cells": [
        "\u003cusername\u003e",
        "test123"
      ],
      "line": 35,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13275482900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter invalid email \"\u003cusername\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password \"John123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1822361500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 23
    }
  ],
  "location": "MyLoginStepdefs.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 625443500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John123",
      "offset": 18
    }
  ],
  "location": "MyLoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 298267400,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1556607800,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 176149800,
  "status": "passed"
});
formatter.after({
  "duration": 1218385300,
  "status": "passed"
});
formatter.before({
  "duration": 12230987400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter invalid email \"\u003cusername\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password \"bobby123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1574607000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 23
    }
  ],
  "location": "MyLoginStepdefs.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 671010600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bobby123",
      "offset": 18
    }
  ],
  "location": "MyLoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 250696700,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1484774200,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 145668500,
  "status": "passed"
});
formatter.after({
  "duration": 1786786600,
  "status": "passed"
});
formatter.before({
  "duration": 13270632600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter invalid email \"\u003cusername\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password \"def123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 975067600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 23
    }
  ],
  "location": "MyLoginStepdefs.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 532878200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def123",
      "offset": 18
    }
  ],
  "location": "MyLoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 234815400,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 697624400,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 142484400,
  "status": "passed"
});
formatter.after({
  "duration": 1233072900,
  "status": "passed"
});
formatter.before({
  "duration": 13445720000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter invalid email \"\u003cusername\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password \"mail123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 993284200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 23
    }
  ],
  "location": "MyLoginStepdefs.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 534795200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mail123",
      "offset": 18
    }
  ],
  "location": "MyLoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 201693500,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1361889300,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 154056300,
  "status": "passed"
});
formatter.after({
  "duration": 1897840600,
  "status": "passed"
});
formatter.before({
  "duration": 12410208700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter invalid email \"\u003cusername\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password \"test123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1703215000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 23
    }
  ],
  "location": "MyLoginStepdefs.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 363752500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 18
    }
  ],
  "location": "MyLoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 192972700,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1321788200,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 139505100,
  "status": "passed"
});
formatter.after({
  "duration": 1217806300,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resource/featurefile/registration.feature");
formatter.feature({
  "line": 2,
  "name": "Register Functionality",
  "description": "As a user I want to register on nop commerce",
  "id": "register-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.before({
  "duration": 13536648800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to registration page successfully",
  "description": "",
  "id": "register-functionality;user-should-navigate-to-registration-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1666887200,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 89593100,
  "status": "passed"
});
formatter.after({
  "duration": 1331530700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should register successfully",
  "description": "",
  "id": "register-functionality;user-should-register-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter first name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter date of birth \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter month of birth \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter year of birth \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter company name \"\u003ccompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter confirm Password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can register successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "register-functionality;user-should-register-successfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "date",
        "month",
        "year",
        "email",
        "companyName",
        "password",
        "confirmPassword"
      ],
      "line": 27,
      "id": "register-functionality;user-should-register-successfully;;1"
    },
    {
      "cells": [
        "Roger",
        "Moore",
        "1",
        "January",
        "1980",
        "\u003cemail\u003e",
        "Roger Intl",
        "Roger123",
        "Roger123"
      ],
      "line": 28,
      "id": "register-functionality;user-should-register-successfully;;2"
    },
    {
      "cells": [
        "James",
        "Bond",
        "10",
        "May",
        "1960",
        "\u003cemail\u003e",
        "James Intl",
        "James123",
        "James123"
      ],
      "line": 29,
      "id": "register-functionality;user-should-register-successfully;;3"
    },
    {
      "cells": [
        "Boris",
        "Johnson",
        "11",
        "April",
        "2019",
        "\u003cemail\u003e",
        "Boris Intl",
        "Test123",
        "Test123"
      ],
      "line": 30,
      "id": "register-functionality;user-should-register-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12732339400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should register successfully",
  "description": "",
  "id": "register-functionality;user-should-register-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter first name \"Roger\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter last name \"Moore\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter date of birth \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter month of birth \"January\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter year of birth \"1980\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter company name \"Roger Intl\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Password \"Roger123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter confirm Password \"Roger123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 655600,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1704294100,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnMaleGenderRadioButton()"
});
formatter.result({
  "duration": 247270700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger",
      "offset": 20
    }
  ],
  "location": "MyRegStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 238205000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moore",
      "offset": 19
    }
  ],
  "location": "MyRegStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 215551800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 268223000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 24
    }
  ],
  "location": "MyRegStepdefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 245270700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1980",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 204992600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterEmailID(String)"
});
formatter.result({
  "duration": 458484100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger Intl",
      "offset": 22
    }
  ],
  "location": "MyRegStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 429830800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 311599200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123",
      "offset": 26
    }
  ],
  "location": "MyRegStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 269249000,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 21782015900,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iCanRegisterSuccessfully()"
});
formatter.result({
  "duration": 91542200,
  "status": "passed"
});
formatter.after({
  "duration": 1249903200,
  "status": "passed"
});
formatter.before({
  "duration": 11923097000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should register successfully",
  "description": "",
  "id": "register-functionality;user-should-register-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter first name \"James\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter last name \"Bond\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter date of birth \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter month of birth \"May\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter year of birth \"1960\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter company name \"James Intl\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Password \"James123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter confirm Password \"James123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 167500,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1896497300,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnMaleGenderRadioButton()"
});
formatter.result({
  "duration": 312212800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 20
    }
  ],
  "location": "MyRegStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 273963400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 19
    }
  ],
  "location": "MyRegStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 248552200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 239989300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 24
    }
  ],
  "location": "MyRegStepdefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 267067900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1960",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 235038200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterEmailID(String)"
});
formatter.result({
  "duration": 498720000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James Intl",
      "offset": 22
    }
  ],
  "location": "MyRegStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 463477800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James123",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 274797300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James123",
      "offset": 26
    }
  ],
  "location": "MyRegStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 341250800,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 21381173600,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iCanRegisterSuccessfully()"
});
formatter.result({
  "duration": 97402100,
  "status": "passed"
});
formatter.after({
  "duration": 1385302700,
  "status": "passed"
});
formatter.before({
  "duration": 12818286100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should register successfully",
  "description": "",
  "id": "register-functionality;user-should-register-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter first name \"Boris\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter last name \"Johnson\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter date of birth \"11\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter month of birth \"April\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter year of birth \"2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter company name \"Boris Intl\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Password \"Test123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter confirm Password \"Test123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 2020497300,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnMaleGenderRadioButton()"
});
formatter.result({
  "duration": 250862300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boris",
      "offset": 20
    }
  ],
  "location": "MyRegStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 271882900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnson",
      "offset": 19
    }
  ],
  "location": "MyRegStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 301387400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 324012000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 24
    }
  ],
  "location": "MyRegStepdefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 286492800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 316054600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterEmailID(String)"
});
formatter.result({
  "duration": 548931300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boris Intl",
      "offset": 22
    }
  ],
  "location": "MyRegStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 369678900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 280870300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 26
    }
  ],
  "location": "MyRegStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 208681800,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 21784073000,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iCanRegisterSuccessfully()"
});
formatter.result({
  "duration": 89615400,
  "status": "passed"
});
formatter.after({
  "duration": 1534158600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "User should Not register successfully with Invalid Credentials",
  "description": "",
  "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter first name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter date of birth \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter month of birth \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter year of birth \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter company name \"\u003ccompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter confirm Password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "System displays error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "date",
        "month",
        "year",
        "email",
        "companyName",
        "password",
        "confirmPassword"
      ],
      "line": 48,
      "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Roger",
        "Moore",
        "1",
        "January",
        "1980",
        "\u003cemail\u003e",
        "Roger Moore Intl",
        "Roger123",
        "Roger123678"
      ],
      "line": 49,
      "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "James",
        "Bond",
        "10",
        "May",
        "1960",
        "\u003cemail\u003e",
        "James Intl",
        "James123",
        "James78786"
      ],
      "line": 50,
      "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "Boris",
        "Johnson",
        "11",
        "April",
        "2019",
        "\u003cemail\u003e",
        "Testing Intl",
        "Test123",
        "Test6767876"
      ],
      "line": 51,
      "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "Bobby",
        "Trap",
        "28",
        "February",
        "1975",
        "\u003cemail\u003e",
        "Bobby Trap",
        "Booby123",
        "Booby123456"
      ],
      "line": 52,
      "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;5"
    },
    {
      "cells": [
        "Joseph",
        "McClare",
        "30",
        "June",
        "1983",
        "\u003cemail\u003e",
        "McClare Intl",
        "Jos123",
        "Joesph123"
      ],
      "line": 53,
      "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13307067000,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "User should Not register successfully with Invalid Credentials",
  "description": "",
  "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter first name \"Roger\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter last name \"Moore\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter date of birth \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter month of birth \"January\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter year of birth \"1980\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter company name \"Roger Moore Intl\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Password \"Roger123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter confirm Password \"Roger123678\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "System displays error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 32900,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1260262600,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnMaleGenderRadioButton()"
});
formatter.result({
  "duration": 272989100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger",
      "offset": 20
    }
  ],
  "location": "MyRegStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 259287700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moore",
      "offset": 19
    }
  ],
  "location": "MyRegStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 243820500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 323349500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 24
    }
  ],
  "location": "MyRegStepdefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 225082300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1980",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 285794100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterEmailID(String)"
});
formatter.result({
  "duration": 601306400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger Moore Intl",
      "offset": 22
    }
  ],
  "location": "MyRegStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 537650900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 319246600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123678",
      "offset": 26
    }
  ],
  "location": "MyRegStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 288763800,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 215806600,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.systemDisplaysErrorMessage()"
});
formatter.result({
  "duration": 90233200,
  "status": "passed"
});
formatter.after({
  "duration": 1538147800,
  "status": "passed"
});
formatter.before({
  "duration": 13312411700,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "User should Not register successfully with Invalid Credentials",
  "description": "",
  "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter first name \"James\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter last name \"Bond\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter date of birth \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter month of birth \"May\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter year of birth \"1960\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter company name \"James Intl\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Password \"James123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter confirm Password \"James78786\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "System displays error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 2091416600,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnMaleGenderRadioButton()"
});
formatter.result({
  "duration": 183413900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 20
    }
  ],
  "location": "MyRegStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 237202700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 19
    }
  ],
  "location": "MyRegStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 236906300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 285671200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 24
    }
  ],
  "location": "MyRegStepdefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 302057500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1960",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 215659600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterEmailID(String)"
});
formatter.result({
  "duration": 483145800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James Intl",
      "offset": 22
    }
  ],
  "location": "MyRegStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 355813500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James123",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 333298700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James78786",
      "offset": 26
    }
  ],
  "location": "MyRegStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 265987900,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 236983400,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.systemDisplaysErrorMessage()"
});
formatter.result({
  "duration": 105833200,
  "status": "passed"
});
formatter.after({
  "duration": 1237562300,
  "status": "passed"
});
formatter.before({
  "duration": 12495256100,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User should Not register successfully with Invalid Credentials",
  "description": "",
  "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter first name \"Boris\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter last name \"Johnson\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter date of birth \"11\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter month of birth \"April\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter year of birth \"2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter company name \"Testing Intl\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Password \"Test123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter confirm Password \"Test6767876\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "System displays error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1181750100,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnMaleGenderRadioButton()"
});
formatter.result({
  "duration": 195801000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boris",
      "offset": 20
    }
  ],
  "location": "MyRegStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 256198200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnson",
      "offset": 19
    }
  ],
  "location": "MyRegStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 243704300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 285663400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 24
    }
  ],
  "location": "MyRegStepdefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 246732300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 274097800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterEmailID(String)"
});
formatter.result({
  "duration": 478702900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing Intl",
      "offset": 22
    }
  ],
  "location": "MyRegStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 474098000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 314586600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test6767876",
      "offset": 26
    }
  ],
  "location": "MyRegStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 292040900,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 238322400,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.systemDisplaysErrorMessage()"
});
formatter.result({
  "duration": 124676300,
  "status": "passed"
});
formatter.after({
  "duration": 1332060100,
  "status": "passed"
});
formatter.before({
  "duration": 12969306700,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "User should Not register successfully with Invalid Credentials",
  "description": "",
  "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter first name \"Bobby\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter last name \"Trap\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter date of birth \"28\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter month of birth \"February\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter year of birth \"1975\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter company name \"Bobby Trap\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Password \"Booby123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter confirm Password \"Booby123456\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "System displays error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 34600,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1411834000,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnMaleGenderRadioButton()"
});
formatter.result({
  "duration": 260348800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bobby",
      "offset": 20
    }
  ],
  "location": "MyRegStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 363514000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trap",
      "offset": 19
    }
  ],
  "location": "MyRegStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 394266800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 331628300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 24
    }
  ],
  "location": "MyRegStepdefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 348615800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 430428900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterEmailID(String)"
});
formatter.result({
  "duration": 509598500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bobby Trap",
      "offset": 22
    }
  ],
  "location": "MyRegStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 504385000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Booby123",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 448650900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Booby123456",
      "offset": 26
    }
  ],
  "location": "MyRegStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 273919000,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 224069200,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.systemDisplaysErrorMessage()"
});
formatter.result({
  "duration": 87150300,
  "status": "passed"
});
formatter.after({
  "duration": 1852105700,
  "status": "passed"
});
formatter.before({
  "duration": 12198175600,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "User should Not register successfully with Invalid Credentials",
  "description": "",
  "id": "register-functionality;user-should-not-register-successfully-with-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on Male Gender Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter first name \"Joseph\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter last name \"McClare\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter date of birth \"30\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter month of birth \"June\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter year of birth \"1983\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter Email ID \"\u003cemail\u003e\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter company name \"McClare Intl\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Password \"Jos123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter confirm Password \"Joesph123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on register Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "System displays error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "MyLoginStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1669811600,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnMaleGenderRadioButton()"
});
formatter.result({
  "duration": 165099900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joseph",
      "offset": 20
    }
  ],
  "location": "MyRegStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 282164000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "McClare",
      "offset": 19
    }
  ],
  "location": "MyRegStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 252439400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 206155100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June",
      "offset": 24
    }
  ],
  "location": "MyRegStepdefs.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 221747500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1983",
      "offset": 23
    }
  ],
  "location": "MyRegStepdefs.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 239676900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterEmailID(String)"
});
formatter.result({
  "duration": 456311100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "McClare Intl",
      "offset": 22
    }
  ],
  "location": "MyRegStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 380023600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jos123",
      "offset": 18
    }
  ],
  "location": "MyRegStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 246356900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joesph123",
      "offset": 26
    }
  ],
  "location": "MyRegStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 207869100,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 220712400,
  "status": "passed"
});
formatter.match({
  "location": "MyRegStepdefs.systemDisplaysErrorMessage()"
});
formatter.result({
  "duration": 102540700,
  "status": "passed"
});
formatter.after({
  "duration": 1137707400,
  "status": "passed"
});
});