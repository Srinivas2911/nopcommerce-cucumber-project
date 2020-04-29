package com.demo.nopcommerce.cucumber.stepdefs;

/*
Created by SP
*/

import com.demo.nopcommerce.pages.BuildYourComputerPage;
import com.demo.nopcommerce.pages.ComputerPage;
import com.demo.nopcommerce.pages.DesktopPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyCompStepdefs {

    @When("^I click on Computers Link$")
    public void iClickOnComputersLink() {
        new HomePage().clickOnComputerLink();
    }
    @Then("^Verify Computers Text on the Computers Page$")
    public void verifyComputersTextOnTheComputersPage() {
        Assert.assertEquals(new ComputerPage().getComputerText(), "Computers");
    }
    @When("^I mouseHover on Computers Link$")
    public void iMouseHoverOnComputersLink() {
        new HomePage().mouseHoverOnComputersLink();
    }
    // this method is on the Home Page as DeskTop Menu is derived from the homepage
    @And("^I click on Desktops Menu$")
    public void iClickOnDesktopsMenu() {
        new HomePage().clickOnDesktopMenu();
    }
    @And("^I click on Build Your Own Computer Link$")
    public void iClickOnBuildYourOwnComputerLink() {
        new DesktopPage().clickOnBuildYourComputerLink();
    }
    @And("^I click on GB400 HDD Radio Button$")
    public void iClickOnGB400HDDRadioButton() {
        new BuildYourComputerPage().clickOnGB400HDDAttritube();
    }
    @And("^I click on Build Your Computer Add Cart Button$")
    public void iClickOnBuildYourComputerAddCartButton() {
        new BuildYourComputerPage().clickOnAddCartTab();
    }

    @Then("^Verify System Displays Product Added to Shopping Cart Message$")
    public void verifySystemDisplaysProductAddedToShoppingCartMessage() {
        Assert.assertEquals(new BuildYourComputerPage().getProductAddedToCartText(),"The product has been added to your shopping cart");
    }

//    @And("^I click on WishList button On Digital Storm Vanquish PC$")
//    public void iClickOnWishListButtonOnLenovoIdeaCentrePC() {
//        new DesktopPage().clickOnWishListButtonOnDigitalStormVanquishPC();
//    }

    @Then("^Verify System Displays Product Added to Your WishList Message$")
    public void verifySystemDisplaysProductAddedToYourWishListMessage() {
        Assert.assertEquals(new DesktopPage().getProductAddedToWishListText(), "The product has been added to your wishlist");
    }


    @And("^I click on WishList button On Lenovo Idea Centre PC$")
    public void iClickOnWishListButtonOnLenovoIdeaCentrePC() {
        new DesktopPage().clickOnWishListButtonOnLenovoIdeaCentrePC();
    }
}

