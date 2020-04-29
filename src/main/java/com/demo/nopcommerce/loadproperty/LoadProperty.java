package com.demo.nopcommerce.loadproperty;
/*
Created by SP
*/
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadProperty {

    /*
     * Configuration of properties to the properties file to Load property
     * To be used as object in the base page .....called Hooks Class
     */
    String projectPath = System.getProperty("user.dir");

    static Properties prop;
    static FileInputStream input;

    public String getProperty(String key){
        prop = new Properties();

        try {
            input = new FileInputStream(projectPath + "/src/test/java/com/demo/nopcommerce/resource/propertiesfile/config.properties");
            prop.load(input);
        } catch (IOException e) {
            e.printStackTrace();
        }
       return prop.getProperty(key);
    }


}
