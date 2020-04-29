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

/* Homepage extends to Utility for the methods that needs to be performed.
 * Listing all the elements through their locators
 */

public class HomePage extends Utility {
    /*
     * Private static Logger for logging the elements and methods into the log4j
     * log.info will record the info into log4j and logs
     * Reporter.addStep will record info into extent-report
     * Using selenium @Findby and initElement methods for locators/elements
     * Using "_" before locater name will help separate them from variable
     */
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(linkText = "Register")
    WebElement _registerLink;

    @FindBy(linkText = "Log in")
    WebElement _loginLink;

    //Computer Link on home page
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]")
    WebElement _computerLink;

    //Desktop element on the computer link on home page
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Desktops')]")
    WebElement _deskTopMenu;

    //Books Link element on Home page
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Books')]")
    WebElement _booksLink;


    public void clickOnRegisterLink() {
        Reporter.addStepLog("Clicking on Register Link : " + _registerLink.toString());
        clickOnElement(_registerLink);
        log.info("Clicking on Register Link : " + _registerLink.toString());
    }

    public void clickOnLoginLink() {
        Reporter.addStepLog("Clicking on Login Link : " + _loginLink.toString());
        clickOnElement(_loginLink);
        log.info("Clicking on Login Link : " + _loginLink.toString());
    }

    public void clickOnComputerLink() {
        Reporter.addStepLog("Clicking on Computers Link : " + _computerLink.toString());
        clickOnElement(_computerLink);
        log.info("Clicking on Computers Link : " + _computerLink.toString());
    }

    public void mouseHoverOnComputersLink() {
        Reporter.addStepLog("Mouse Hovering on Computers Link : " + _registerLink.toString());
        mouseHoverToElement(_computerLink);
        log.info("Mouse Hovering on Computers Link : " + _registerLink.toString());
    }

    public void clickOnDesktopMenu() {
        Reporter.addStepLog("Clicking on DeskTop Menu : " + _deskTopMenu.toString());
        clickOnElement(_deskTopMenu);
        log.info("Clicking on DeskTopMenu : " + _deskTopMenu.toString());
    }

    public void clickOnBooksLink() {
        Reporter.addStepLog("Clicking on Books Link : " + _booksLink.toString());
        clickOnElement(_booksLink);
        log.info("Clicking on Books Link : " + _booksLink.toString());
    }
}
