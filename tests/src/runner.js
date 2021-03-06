// import the driver manager to manage selenium webdriver
const {DriverManager} = require("./driver");

// import mocha
const Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// create mocha test suite
const mocha = new Mocha({
    reporter: 'mochawesome'
});

// Add all test files to the mocha runner
const testDir = "./src/tests";
fs.readdirSync(testDir).filter(function(file) {
    // Only keep the .js files
    return file.substr(-3) === '.js';
}).forEach(function(file) {
    mocha.addFile(
        path.join(testDir, file)
    );
});

// create driver for managing selenium
const driverManager = new DriverManager();

// use driver to run test suite
driverManager.runWithDriver((done) => {
    try {
        // Run the tests.
        mocha.run(function(failures) {
            done();
            
            // host the results on the webserver
            require("./server");

            // exit with non-zero status if there were failures
            process.exitCode = failures ? 1 : 0;
        });
    } catch(err) {
        console.log("Tests failed dramatically. Forcefully cleaning up...");
        console.error(err);
        done();
    }
    
});