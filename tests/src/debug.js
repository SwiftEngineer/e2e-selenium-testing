const expect = require('expect.js');
const {Builder, By, until, Key} = require("selenium-webdriver");

describe("Todos", function() {
    
    let driver;

    before(async function() {
        // runs before all tests in this block
        driver = await new Builder()
            .forBrowser("chrome")
            .usingServer("http://localhost:4444/wd/hub")
            .build();
    });
    
    it("can be created", async function() {
        await driver.get("http://ui:8000/index.html");

        const expectedTodoLabel = "Get this thing to work!";

        // find the new-todo component
        const newTodo = await driver.wait(until.elementLocated(By.css(".new-todo")), 5000);
        
        // add a new todo
        newTodo.sendKeys(expectedTodoLabel, Key.ENTER);

        // find the newly created todo
        const createdTodo = await driver.wait(until.elementLocated(By.css(".todo-list li div.view label")), 5000);

        const labelForTodo = await createdTodo.getText();

        expect(labelForTodo).to.equal(expectedTodoLabel);
        
    }).timeout(10000);

    after(function() { 
        driver.quit()
    });
});