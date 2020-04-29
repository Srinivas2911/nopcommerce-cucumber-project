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


public class RegistrationCompletePage extends Utility {

    /*
     * Private static Logger for logging the elements and methods into the log4j
     * log.info will record the info into log4j and logs and reports
     * Reporter.log will record info into extent-report
     * Using selenium @Findby and initElement methods for locators/elements
     * Using "_" before locater name will help separate them from variable
     */
    private static final Logger log = LogManager.getLogger(RegistrationCompletePage.class.getName());

    @FindBy(xpath = "//div[@class='result']")
    WebElement _registrationConfirmText;

    public void verifyRegistrationConfirmText() {
        Reporter.addStepLog("Verifying Registration Confirmation Text" + _registrationConfirmText.toString());
        verifyThatTextIsDisplayed(_registrationConfirmText, "Your registration completed");
        log.info("Verifying Registration Confirmation Text" + _registrationConfirmText.toString());
    }

    public String getRegistrationConfirmText() {
        Reporter.addStepLog("Getting Registration Confirmation Text" + _registrationConfirmText.toString());
        log.info("Getting Registration Confirmation Text" + _registrationConfirmText.toString());
        return getTextFromElement(_registrationConfirmText);
    }
}
