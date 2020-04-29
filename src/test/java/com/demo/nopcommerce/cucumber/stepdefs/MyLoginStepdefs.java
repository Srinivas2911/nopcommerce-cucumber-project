package com.demo.nopcommerce.cucumber.stepdefs;

/*
Created by SP
*/

import com.demo.nopcommerce.pages.HomePage;
import com.demo.nopcommerce.pages.LoginPage;
import com.demo.nopcommerce.pages.RegisterPage;
import com.demo.nopcommerce.pages.WelcomeStorePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import static com.demo.nopcommerce.utility.Utility.getRandomString;

public class MyLoginStepdefs {

    /*
     * defining methods to the various steps in the feature file
     * corresponding methods to called in the various pages classes in pages folder
     */
    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals(new LoginPage().getWelcomeText(), "Welcome, Please Sign In!");
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterUserEmail(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterUserPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickonUserLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        Assert.assertEquals(new WelcomeStorePage().getWelcomeStoreText(), "Welcome to our store");
    }

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        Assert.assertEquals(new RegisterPage().getRegisterText(), "Register");
    }

//    @Then("^I should see the error message \"([^\"]*)\"$")
//    public void iShouldSeeTheErrorMessage(String errorMessage) {
//        Assert.assertTrue(new LoginPage().getErrorMessageText().contains("Login was unsuccessful. Please correct the errors and try again"));
//    }

    @Then("^I should see the error message$")
    public void iShouldSeeTheErrorMessage() {
        Assert.assertTrue(new LoginPage().getErrorMessageText().contains("Login was unsuccessful. Please correct the errors and try again"));
    }

    @And("^I enter invalid email \"([^\"]*)\"$")
    public void iEnterInvalidEmail(String username) {
        new LoginPage().enterUserEmail(username = "TestingCases"+getRandomString(6)+"@gmail.com");
    }
}
