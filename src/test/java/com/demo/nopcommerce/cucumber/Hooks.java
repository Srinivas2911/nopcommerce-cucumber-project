package com.demo.nopcommerce.cucumber;
/*
Created by SP
*/
import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.basepage.BasePage;
import com.demo.nopcommerce.browserselector.BrowserSelector;
import com.demo.nopcommerce.loadproperty.LoadProperty;
import com.demo.nopcommerce.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

// extends BasePage

public class Hooks extends BasePage {

    BrowserSelector browserSelector = new BrowserSelector();
    LoadProperty loadProperty = new LoadProperty();

    String baseUrl = loadProperty.getProperty("baseUrl");

    String browser = loadProperty.getProperty("browser");

    /*
     * Before and After import from cucumber
     * java import cucumber.api.java and NOT JUnit.****
     */

// assigning author
    @Before
    public void openBrowser(){
        browserSelector.selectBrowser(browser);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.get(baseUrl);

        // Assigning Author
        Reporter.assignAuthor("Roger Moore International Ltd", "Roger Moore");
    }

    /*
     * Assigning parameter for listener for screenshots and removing the space and replace by _
     * handle exception with try and catch
     */

    @After
    public void tearDown(Scenario scenario){
        if (scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        driver.quit();
    }

}
