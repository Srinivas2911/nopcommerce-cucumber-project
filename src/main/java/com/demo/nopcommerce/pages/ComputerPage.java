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

public class ComputerPage extends Utility {
    /*
     * Private static Logger for logging the elements and methods into the log4j
     * log.info will record the info into log4j and logs and reports
     * Reporter.addStep will record info into extent-report
     * Using selenium @Findby and initElement methods for locators/elements
     * Using "_"  before locater name will help separate them from variable
     */
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    //Using selenium @Findby and initElement methods for locators/elements
// using _ help separate them from variable

    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement _computerText;


    public void verifyComputerText(){
        Reporter.addStepLog("Verifying Computer Text : " + _computerText.toString());
        verifyThatTextIsDisplayed(_computerText, "Computers");
        log.info("Verifying Computer Text : " +_computerText.toString());
    }
    public String getComputerText() {
        Reporter.addStepLog("Getting Computer Text : "+getTextFromElement(_computerText)+" " +_computerText.toString());
        log.info("Getting Computer Text : "+getTextFromElement(_computerText)+" " +_computerText.toString());
        return getTextFromElement(_computerText);
    }

}
