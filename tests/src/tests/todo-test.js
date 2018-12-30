const expect = require("expect.js");
const {Todo} = require("../pageobjects/todo");

describe("Todos", function() {
    
    it("can be created", async function() {
        const expectedTodoLabel = "Get this thing to work!";

        // create a page object to represent the todo page
        const todoPage = await new Todo();

        // make sure there are no todos at first
        const numberOfTodos = await todoPage.countTodos();
        expect(numberOfTodos).to.be(0);

        // create a new todo
        const createdTodo = await todoPage.createTodo(expectedTodoLabel);

        // now there should be 1 todo
        const numberOfTodosAfterCreation = await todoPage.countTodos();
        expect(numberOfTodosAfterCreation).to.be(1);

        // get the label of the newly created todo
        const labelForTodo = await createdTodo.getText();

        // make sure the label is correct
        expect(labelForTodo).to.equal(expectedTodoLabel); 
    });
});