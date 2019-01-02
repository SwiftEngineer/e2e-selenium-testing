export var driver = null;

const {Builder, By, until, Key} = require("selenium-webdriver");

export class DriverManager {
    
    async delay(ms) {
        return new Promise(res => setTimeout(res, ms));
    }
    
    async createDriverInstance(attempts = 1) {
        try {
            return await new Builder()
                .forBrowser("chrome")
                .usingServer("http://webdriver:4444/wd/hub")
                .build();
        } catch(e) {
            if (attempts < 5) {
                console.log("Still working on connecting to the Webdriver instance...");
                // failed to connect, wait 5 seconds and then retry...
                await this.delay(5000);
                
                // retry now that we have waited a bit
                return await this.createDriverInstance(attempts + 1);
            } else {
                // give up
                throw `${attempts} attempts were made to connect to the Webdriver, which exceeds the maximum. Please make sure the Webdriver is available and the url is correct!`;
            }
        }
        
    }

    async runWithDriver(func = ((done) => { done(); })) {
        const doneHook = function() {
            console.log("\nFinished test suite. Disconnecting from driver.");
            if (driver != null) {
                console.log("Disconnected.");
                driver.quit();
            }
        }

        // set driver
        console.log("Connecting to driver...");
        driver = await this.createDriverInstance();
        console.log("Connected.");

        // call the function with the hook
        console.log("Running test suite...");
        func(doneHook);
    }
}