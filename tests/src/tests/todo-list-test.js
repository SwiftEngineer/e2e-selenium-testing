const expect = require("expect.js");
const {TodoList} = require("../pageobjects/todolist");

describe("TodoList", function() {
    
    it("can create todos", async function() {
        const expectedTodoLabel = "Get this thing to work!";

        // create a page object to represent the todo list
        const todoList = await new TodoList();

        // check how many todos currently exist
        const todoCountAtStart = await todoList.countTodos();
        expect(todoCountAtStart).to.be(0);

        // create a new todo
        const createdTodo = await todoList.createTodo(expectedTodoLabel);

        // now there should be 1 todo
        const numberOfTodosAfterCreation = await todoList.countTodos();
        expect(numberOfTodosAfterCreation).to.be(todoCountAtStart + 1);

        // get the label of the newly created todo
        const labelForTodo = await createdTodo.getLabel();

        // make sure the label is correct
        expect(labelForTodo).to.equal(expectedTodoLabel); 
    });
    
});