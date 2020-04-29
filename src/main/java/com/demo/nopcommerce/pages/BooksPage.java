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

public class BooksPage extends Utility {
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

    @FindBy(xpath = "//h1[contains(text(),'Books')]")
    WebElement _booksText;

    @FindBy(xpath = "//select[@name='products-orderby']")
    WebElement _sortByField;
    //select[@name='products-orderby']
//    clickOnElement(By.xpath("//option[contains(text(),'Name: A to Z')]"));

    @FindBy(tagName = "h2")
    WebElement _booksDisplayField;

    @FindBy(tagName = "h2")
    WebElement _tagName;

    @FindBy(className = "product-grid")
    WebElement _productGrid;

    public void verifyBooksPageText() {
        Reporter.addStepLog("Verifying Books Text : " + _booksText.toString());
        verifyThatTextIsDisplayed(_booksText, "Books");
        log.info("Verifying Books Text : " + _booksText.toString());
    }

    public String getBooksPageText() {
        Reporter.addStepLog("Getting Books Text : " + getTextFromElement(_booksText) + " " + _booksText.toString());
        log.info("Getting Books Text : " + getTextFromElement(_booksText) + " " + _booksText.toString());
        return getTextFromElement(_booksText);
    }


    public void selectBooksByNameAtoZOrder() {
        Reporter.addStepLog("Selecting Books Sorted by Name : A to Z : " + _sortByField.toString());
        selectByVisibleTextFromDropDown(_sortByField, "Name: A to Z");
        log.info("Selecting Books Sorted by Name : A to Z : " + _sortByField.toString());
    }

    public void verifyBooksDisplayedNameAtoZOrder() {
        Reporter.addStepLog("Verifying Books Sorted in order Name A to Z : " + getTextFromElement(By.className("product-grid"))+ " "+ _booksDisplayField.toString());
        sortingAtoZ(By.className("product-grid"));
        log.info("Verifying Books Sorted in order Name A to Z : " + getTextFromElement(By.className("product-grid")) +" "+ _booksDisplayField.toString());
    }

    public void selectBooksByPriceLowToHigh() {
        Reporter.addStepLog("Selecting Books Sorted by Price: Low to High : " + _sortByField.toString());
        selectByVisibleTextFromDropDown(_sortByField, "Price: Low to High");
        log.info("Selecting Books Sorted by Price: Low to High : " + _sortByField.toString());
    }

    public void verifyBooksDisplayedByPriceLowToHighOrder() {
        Reporter.addStepLog("Verifying Books Sorted by Price: Low to High : " + getTextFromElement(By.className("product-grid"))+ " "+ _booksDisplayField.toString());
        sortbyPrices(By.className("product-grid"));
        log.info("Verifying Books Sorted by Price: Low to High : "+ getTextFromElement(By.className("product-grid"))+" "+ _booksDisplayField.toString());
    }

}


