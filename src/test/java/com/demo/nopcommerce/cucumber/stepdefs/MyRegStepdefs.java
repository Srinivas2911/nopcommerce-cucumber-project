package com.demo.nopcommerce.cucumber.stepdefs;

/*
Created by SP
*/

import com.demo.nopcommerce.pages.RegisterPage;
import com.demo.nopcommerce.pages.RegistrationCompletePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import static com.demo.nopcommerce.utility.Utility.getRandomString;

public class MyRegStepdefs {
    @And("^I click on Male Gender Radio Button$")
    public void iClickOnMaleGenderRadioButton() {
        new RegisterPage().clickOnMaleGenderRadioButton();
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstName) {
        new RegisterPage().enterFirstName(firstName);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName) {
        new RegisterPage().enterLastName(lastName);
    }

    @And("^I enter date of birth \"([^\"]*)\"$")
    public void iEnterDateOfBirth(String date) {
        new RegisterPage().enterDayOfBirth(date);
    }

    @And("^I enter month of birth \"([^\"]*)\"$")
    public void iEnterMonthOfBirth(String month) {
        new RegisterPage().enterMonthOfBirth(month);
    }

    @And("^I enter year of birth \"([^\"]*)\"$")
    public void iEnterYearOfBirth(String year) {
        new RegisterPage().enterYearOfBirth(year);
    }

    @And("^I enter Email ID \"([^\"]*)\"$")
    public void iEnterEmailID(String email) {
        new RegisterPage().enterEmail(email = "Testing"+getRandomString(4)+"@gmail.com");
    }
    @And("^I enter company name \"([^\"]*)\"$")
    public void iEnterCompanyName(String companyName) {
        new RegisterPage().enterCompanyName(companyName);
    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new RegisterPage().enterPassword(password);
    }

    @And("^I enter confirm Password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword) {
        new RegisterPage().enterConfirmPassword(confirmPassword);
    }

    @And("^I click on register Button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }
    @Then("^I can register successfully$")
    public void iCanRegisterSuccessfully() {
        Assert.assertEquals(new RegistrationCompletePage().getRegistrationConfirmText(), "Your registration completed");
    }
    @Then("^System displays error message$")
    public void systemDisplaysErrorMessage() {
        Assert.assertEquals(new RegisterPage().getRegistrationErrorMessage(), "The password and confirmation password do not match.");
    }
}
