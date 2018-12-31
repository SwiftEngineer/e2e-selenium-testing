const expect = require("expect.js");
const {TodoList} = require("../pageobjects/todolist");

describe("Todo", function() {
    
    it("can be deleted", async function() {
        const expectedTodoLabel = "Delete me!";

        // create a page object to represent the todo list
        const todoList = await new TodoList();

        // get the current number of todos
        const todosAtStart = await todoList.countTodos();

        // create a new todo
        const createdTodo = await todoList.createTodo(expectedTodoLabel);

        // now there should be 1 todo new
        const numberOfTodosAfterCreation = await todoList.countTodos();
        expect(numberOfTodosAfterCreation).to.be(todosAtStart + 1);

        // delete the todo
        await createdTodo.delete();

        // we should be back to the starting amount of todos
        const numberOfTodosAfterDelete = await todoList.countTodos();
        expect(numberOfTodosAfterDelete).to.be(todosAtStart);
    });
    
});