package com.demo.nopcommerce.basepage;
/*
Created by SP
*/
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;


public class BasePage {

    public static WebDriver driver;

    /*
    * Constructor crested for initialising the WebElements and configurartion of log4j properties
     */

    public BasePage() {

        PageFactory.initElements(driver, this);
        PropertyConfigurator.configure(System.getProperty("user.dir")+"/src/test/java/com/demo/nopcommerce/resource/propertiesfile/log4j.properties");

    }
}
