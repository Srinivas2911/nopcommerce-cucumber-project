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

public class DesktopPage extends Utility {
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

    @FindBy(xpath = "//h1[contains(text(),'Desktops')]")
            WebElement _desktopText;

    @FindBy(xpath= "//h2[@class='title']//a[contains(text(),'Desktops')]")
    WebElement _desktopLink;

    @FindBy(xpath="//div[@class='item-grid']//div[1]//div[1]//div[1]//a[1]//img[1]")
    WebElement _buildYourCompImg;

    @FindBy(xpath = "//div[@class='product-grid']//div[3]//div[1]//div[2]//div[3]//div[2]//input[3]")
    WebElement _wishListBtn;

    //div[@class='page-body']//div[2]//div[1]//div[2]//div[3]//div[2]//input[3]

    @FindBy(xpath = "//div[@class='bar-notification success']")
    WebElement _productAddedToWishList;
    //p[@class='content']

    public void clickOnDesktopLink() {
        Reporter.addStepLog("Clicking on Desktop Link : " + _desktopLink.toString() + "<br>");
        clickOnElement(_desktopLink);
        log.info("Clicking on Desktop Link : " + _desktopLink.toString());
    }

    public void verifyDesktopLink() {
        Reporter.addStepLog("Verifying Desktop Link Text : " + _desktopLink.toString() + "<br>");
        verifyThatTextIsDisplayed(_desktopLink, " Desktops ");
        log.info("Verifying Desktop Link Text : " + _desktopLink.toString());
    }

    public String getDesktopText() {
        Reporter.addStepLog("Getting Desktop Link Text : " + _desktopLink.toString() + "<br>");
        log.info("Getting Desktop Link Text : " + _desktopLink.toString());
        return getTextFromElement(_desktopLink);
    }

    public void clickOnBuildYourComputerLink() {
        Reporter.addStepLog("Clicking on Build Your Own Computer Link : " + _buildYourCompImg.toString());
        mouseHoverToElementAndClick(_buildYourCompImg);
        log.info("Clicking on Build Your Own Computer Link : " + _buildYourCompImg.toString());
    }

    public void clickOnWishListButtonOnLenovoIdeaCentrePC() {
        Reporter.addStepLog("Clicking on Wishlist Button on Build Your Computer Menu : " + _wishListBtn.toString() + "<br>");
        clickOnElement(_desktopText);
        mouseHoverToElementAndClick(_wishListBtn);
        log.info("Clicking on Wishlist Button on Build Your Computer Menu : " + _wishListBtn.toString());
    }

    public void verifyProductAddedToWishList() {
        Reporter.addStepLog("Verifying Product Added to WishList Text : " + _productAddedToWishList.toString() + "<br>");
        verifyThatTextIsDisplayed(_productAddedToWishList, "The product has been added to your wishlist");
        log.info("Verifying Product Added to WishList Text: " + _productAddedToWishList.toString());
    }

    public String getProductAddedToWishListText() {
        Reporter.addStepLog("Getting Product Added to WishList Text : " + _productAddedToWishList.toString() + "<br>");
        log.info("Getting Product Added to WishList Text : " + _productAddedToWishList.toString());
        return getTextFromElement(_productAddedToWishList);
    }

}
