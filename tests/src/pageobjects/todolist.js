import { Todo } from "./todo";
import { driver } from "../driver";
import { By, until, Key } from "selenium-webdriver";

export class TodoList {
    
    /**
     * Create a page object for the Todo page.
     */
    constructor() {
        return (async () => {
            await driver.get("http://ui:8000/index.html");
            return this;
        })();
    }

    /**
     * Count how many Todo items exist.
     *
     * @param {String} nameForTodo
     */
    async countTodos() {
        // make sure the todo list has been rendered already
        await driver.wait(until.elementLocated(By.css(".todo-list")), 2500);

        // get the todo items
        const todoItems = await driver.findElements(By.css(".todo-list li"));

        // return the number of todos
        return todoItems.length;
    }   
    
    /**
     * Create a Todo item and return it.
     *
     * @param {String} nameForTodo
     * @returns {Todo} 
     */
    async createTodo(nameForTodo = "my-todo") {
        // find the new-todo component
        const newTodo = await driver.wait(until.elementLocated(By.css(".new-todo")), 2500);
        
        // add a new todo
        newTodo.sendKeys(nameForTodo, Key.ENTER);

        // find the newly created todo
        return new Todo(await driver.wait(until.elementLocated(By.xpath(`//li[contains(., '${nameForTodo}')]`))), 2500);
    }
}