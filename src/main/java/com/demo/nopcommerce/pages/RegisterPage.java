package com.demo.nopcommerce.pages;

/*
Created by SP
*/

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterPage extends Utility {

    /*
     * Private static Logger for logging the elements and methods into the log4j
     * log.info will record the info into log4j and logs and reports
     * Reporter.addStep will record info into extent-report
     * Using selenium @Findby and initElement methods for locators/elements
     * Using "_" before locater name will help separate them from variable
     */
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement _registerText;

    @FindBy(id = "gender-male")
    WebElement _genderMaleRadioButton;

    @FindBy(xpath = "//input[@name='FirstName']")
    WebElement _firstNameField;

    @FindBy(xpath = "//input[@name='LastName']")
    WebElement _lastNameField;

    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement _dayOfBirthField;

    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement _monthOfBirthField;

    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement _yearOfBirthField;

    @FindBy(xpath = "//input[@name='Email']")
    WebElement _newUserEmailField;

    @FindBy(xpath = "//input[@name='Company']")
    WebElement _companyField;

    @FindBy(xpath = "//input[@name='Password']")
    WebElement _newUserPasswordField;

    @FindBy(xpath = "//input[@name='ConfirmPassword']")
    WebElement _confirmPasswordField;

    @FindBy(xpath = "//input[@name='register-button']")
    WebElement _newUserRegisterButton;

    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement _registrationErrorMessage;

    public String getRegisterText() {
        Reporter.addStepLog("Getting Register Text : " + _registerText.toString());
        log.info("Getting Register Text : " + _registerText.toString());
        return getTextFromElement(_registerText);
    }

    public void verifyRegisterText() {
        Reporter.addStepLog("Verifying Register Text : " + _registerText.toString());
        verifyThatTextIsDisplayed(_registerText, "Register");
        log.info("Verifying Register Text : " + _registerText.toString());
    }


    public void clickOnMaleGenderRadioButton() {
        Reporter.addStepLog("Clicking on Male Gender Radio Button  : " + _genderMaleRadioButton.toString());
        clickOnElement(_genderMaleRadioButton);
        log.info("Clicking on Male Gender Radio Button : " + _genderMaleRadioButton.toString());
    }

    public void enterFirstName(String firstName) {
        Reporter.addStepLog("Entering First Name : " + firstName + " On First Name Field : " + _firstNameField.toString());
        sendTextToElement(_firstNameField, firstName);
        log.info("Entering First Name : " + firstName + " On First Name Field : " + _firstNameField.toString());
    }

    public void enterLastName(String lastName) {
        Reporter.addStepLog("Entering Last Name : " + lastName + " On Last Name Field : " + _lastNameField.toString());
        sendTextToElement(_lastNameField, lastName);
        log.info("Entering Last Name : " + lastName + " On Last Name Field : " + _lastNameField.toString());
    }

    public void enterDayOfBirth(String dateOfBirth) {
        Reporter.addStepLog("Selecting Day of Birth : " + dateOfBirth + " On Day of Birth Field : " + _dayOfBirthField.toString());
 //       clickOnElement(_dayOfBirthField);
        selectByVisibleTextFromDropDown(_dayOfBirthField, dateOfBirth);
        log.info("Selecting Day of Birth : " + dateOfBirth + " On Day of Birth Field : " + _dayOfBirthField.toString());
    }

    public void enterMonthOfBirth(String monthOfBirth) {
        Reporter.addStepLog("Selecting Month of Birth : " + monthOfBirth + " On Month of Birth Field : " + _monthOfBirthField.toString());
        selectByVisibleTextFromDropDown(_monthOfBirthField, monthOfBirth);
        log.info("Selecting Month of Birth : " + monthOfBirth + " On Month of Birth Field : " + _monthOfBirthField.toString());
    }

    public void enterYearOfBirth(String yearOfBirth) {
        Reporter.addStepLog("Selecting Year of Birth : " + yearOfBirth + " On Year of Birth Field : " + _yearOfBirthField.toString());
        selectByVisibleTextFromDropDown(_yearOfBirthField, yearOfBirth);
        log.info("Selecting Year of Birth : " + yearOfBirth + " On Year of Birth Field : " + _yearOfBirthField.toString());
    }

    public void enterEmail(String email) {
        Reporter.addStepLog("Entering Email ID : " + email + " On Email Field : " + _newUserEmailField.toString());
        sendTextToElement(_newUserEmailField, email);
        log.info("Entering Email ID : " + email + " On Email Field : " + _newUserEmailField.toString());
    }

    public void enterCompanyName(String companyName) {
        Reporter.addStepLog("Entering Company Name : " + companyName + " On Company Name Field : " + _companyField.toString());
        clickOnElement(_companyField);
        sendTextToElement(_companyField, companyName);
        log.info("Entering Company Name : " + companyName + " On Company Name Field : " + _companyField.toString());
    }

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering Password : " + password + " On Password Field : " + _newUserPasswordField.toString());
        sendTextToElement(_newUserPasswordField, password);
        log.info("Entering Password : " + password + " On Password Field : " + _newUserPasswordField.toString());
    }

    public void enterConfirmPassword(String password) {
        Reporter.addStepLog("Confirming Password : " + password + " On Confirm Password Field : " + _confirmPasswordField.toString());
        sendTextToElement(_confirmPasswordField, password);
        log.info("Confirming Password : " + password + " On Confirm Password Field : " + _confirmPasswordField.toString());
    }

    // wrongPassword for failing a test or invalid credential check
    public void enterWrongConfirmPassword(String wrongPassword) {
        Reporter.addStepLog("Providing Wrong Confirm Password : " + wrongPassword + " On Confirm Password Field : " + _confirmPasswordField.toString() + "<br>");
        sendTextToElement(_confirmPasswordField, wrongPassword);
        log.info("Providing Wrong Confirm Password : " + wrongPassword + " On Confirm Password Field : " + _confirmPasswordField.toString());
    }

    public void clickOnRegisterButton() {
        Reporter.addStepLog("Clicking on Register Button  : " + _newUserRegisterButton.toString());
        mouseHoverToElementAndClick(_newUserRegisterButton);
        log.info("Clicking on Register Button  : " + _newUserRegisterButton.toString());
    }

    public void registrationErrorMessageText() {
        Reporter.addStepLog("Verifying Registration Error Message : " + _registrationErrorMessage.toString());
        verifyThatTextIsDisplayed(_registrationErrorMessage, "The password and confirmation password do not match.");
        log.info("Verifying Registration Error Message : " + _registrationErrorMessage.toString());
    }

    public String getRegistrationErrorMessage() {
        Reporter.addStepLog("Getting Registration Error Message : " + _registrationErrorMessage.toString());
        log.info("Getting Registration Error Message : " + _registrationErrorMessage.toString());
        return getTextFromElement(_registrationErrorMessage);
    }

    public void doRegisterApplication
            (String firstName, String lastName, String dateOfBirth,
             String monthOfBirth, String yearOfBirth, String email,
             String companyName, String password, String confirmPassword ) {

        clickOnMaleGenderRadioButton();
        enterFirstName(firstName);
        enterLastName(lastName);
        enterDayOfBirth(dateOfBirth);
        enterMonthOfBirth(monthOfBirth);
        enterYearOfBirth(yearOfBirth);
        enterEmail(email);
        enterCompanyName(companyName);
        enterPassword(password);
        enterConfirmPassword(confirmPassword);
        clickOnRegisterButton();



    }

}
