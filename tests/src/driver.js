export var driver = null;

const {Builder, By, until, Key} = require("selenium-webdriver");

export class DriverManager {
    async createDriverInstance() {
        return new Builder()
            .forBrowser("chrome")
            .usingServer("http://localhost:4444/wd/hub")
            .build();
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