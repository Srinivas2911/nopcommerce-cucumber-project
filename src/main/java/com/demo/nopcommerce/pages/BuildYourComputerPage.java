package com.demo.nopcommerce.pages;

/*
Created by SP
*/

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BuildYourComputerPage extends Utility {

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

    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement _gb400RadioButton;

    @FindBy(xpath = "//input[@id='add-to-cart-button-1']")
    WebElement _addcartTab;

    @FindBy(xpath = "//p[@class='content']")
    WebElement _productAddedToCartText;

    public void clickOnGB400HDDAttritube() {
        Reporter.addStepLog("Clicking on HDD gb400 Radio Button : " + _gb400RadioButton.toString());
        clickOnElement(_gb400RadioButton);
        log.info("Clicking on HDD gb400 Radio Button : " + _gb400RadioButton.toString());
    }


    public void clickOnAddCartTab() {
        Reporter.addStepLog("Clicking on Add Cart Tab : " + _addcartTab.toString());
        clickOnElement(_addcartTab);
        log.info("Clicking on Add Cart Tab : " + _addcartTab.toString());
    }

    public void verifyProductAddedtoCartText() {
        Reporter.addStepLog("Verifying Product Added to Cart Text : " + _productAddedToCartText.toString());
        verifyThatTextIsDisplayed(_productAddedToCartText, "The product has been added to your shopping cart");
        log.info("Verifying Product Added to Cart Text : " + _productAddedToCartText.toString());
    }

    public String getProductAddedToCartText() {
        Reporter.addStepLog("Getting Product Added to Cart Text : : " + getTextFromElement(_productAddedToCartText) + " " + _productAddedToCartText.toString());
        log.info("Getting Product Added to Cart Text : : " + getTextFromElement(_productAddedToCartText) + " " + _productAddedToCartText.toString());
        return getTextFromElement(_productAddedToCartText);
    }

}
