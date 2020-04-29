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

public class LoginPage extends Utility {
    /*
     * Private static Logger for logging the elements and methods into the log4j
     * log.info will record the info into log4j and logs and reports
     * Reporter.addStep will record info into extent-report
     * Using selenium @Findby and initElement methods for locators/elements
     * Using "_"  before locater name will help separate them from variable
     */
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement _loginWelcomeText;

    @FindBy(id = "Email")
    WebElement _loginEmailField;

    @FindBy(xpath = "//input[@name='Password']")
    WebElement _loginPasswordField;

    @FindBy(xpath = "//input[@class='button-1 login-button']")
    WebElement _loginUserButton;

    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement _errorMessageText;

    public String getWelcomeText() {
        Reporter.addStepLog(" Getting Login Welcome Text Message : " + _loginWelcomeText.toString());
        log.info("Getting Login Welcome Text Message : " + _loginWelcomeText.toString());
        return getTextFromElement(_loginWelcomeText);
    }

    public void enterUserEmail(String email) {
        Reporter.addStepLog("Entering Email : " + email + " On Email Field " + _loginEmailField.toString());
        clickOnElement(_loginEmailField);
        sendTextToElement(_loginEmailField, email);
        log.info("Entering Email : " + email + " On Email Field " + _loginEmailField.toString());
    }

    public void enterUserPassword(String password) {
        Reporter.addStepLog("Entering Password : " + password + " On Password Field " + _loginPasswordField.toString());
        sendTextToElement(_loginPasswordField, password);
        log.info("Entering Password : " + password + " On Password Field " + _loginPasswordField.toString());
    }

    public void enterUserWrongPassword(String wrongPassword) {
        Reporter.addStepLog("Entering A Wrong Password : " + wrongPassword + " On Password Field " + _loginPasswordField.toString());
        sendTextToElement(_loginPasswordField, wrongPassword);
        log.info("Entering A Wrong Password : " + wrongPassword + " On Password Field " + _loginPasswordField.toString());
    }

    public void clickonUserLoginButton() {
        Reporter.addStepLog(" Clicking on Login Button : " + _loginUserButton.toString());
        clickOnElement(_loginUserButton);
        log.info(" Clicking on Login Button : " + _loginUserButton.toString());

    }

    public void loginToApplication(String email, String password) {
        enterUserEmail(email);
        enterUserPassword(password);
        clickonUserLoginButton();
    }

    public String getErrorMessageText() {
        Reporter.addStepLog(" Getting Error Message Text : " + _errorMessageText.toString() + "<br>");
        log.info("Clicking Error Message Text : " + _errorMessageText.toString());
        return getTextFromElement(_errorMessageText);
    }

}
