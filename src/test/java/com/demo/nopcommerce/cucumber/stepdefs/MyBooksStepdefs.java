package com.demo.nopcommerce.cucumber.stepdefs;

/*
Created by SP
*/

import com.demo.nopcommerce.pages.BooksPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;



public class MyBooksStepdefs {
    @When("^I click on the Books Link$")
    public void iClickOnTheBooksLink() {
        new HomePage().clickOnBooksLink();
    }

    @Then("^Verify I am on the Books Page Text$")
    public void verifyIAmOnTheBooksPageText() {
        Assert.assertEquals(new BooksPage().getBooksPageText(), "Books");
    }

    @And("^I select Name A to Z on Sort By Menu from Drop Down$")
    public void iSelectNameAToZOnSortByMenuFromDropDown() {
        new BooksPage().selectBooksByNameAtoZOrder();
    }

    @Then("^System displays Book names in A to Z alphabetical order$")
    public void systemDisplaysBookNamesInAToZAlphabeticalOrder() {
        new BooksPage().verifyBooksDisplayedNameAtoZOrder();
    }


    @And("^I select Price Low to High on Sort By Menu from Drop Down$")
    public void iSelectPriceLowToHighOnSortByMenuFromDropDown() {
        new BooksPage().selectBooksByPriceLowToHigh();

    }

    @Then("^System displays Book names Price Low to High order$")
    public void systemDisplaysBookNamesPriceLowToHighOrder() {
        new BooksPage().verifyBooksDisplayedByPriceLowToHighOrder();
    }


}
