import { driver } from "../driver";
import { By, Actions } from "selenium-webdriver";

export class Todo {
    
    /**
     * Create a page object for a single Todo.
     */
    constructor(elem) {
        this.todo = elem;
        return this;
    }

    /**
     * Create a promise to fetch the label for the todo.
     * 
     * @returns {Promise}
     */
    getLabel() {
        return (async () => { 
            // get the label element
            const label = await this.todo.findElement(By.css("div.view label"));

            // return the text inside it
            return await label.getText();
        })();
    }


    /**
     * Delete the todo.
     * 
     * @returns {Promise} a promise to delete the Todo
     */
    delete() {
        return (async () => { 
            // hover the mouse over the element
            const actions = driver.actions({ bridge: true });
                
            const mouse = actions.mouse();
                
            actions.pause(mouse)
                .move({ origin: this.todo })
                .pause(500)
                .move({ origin: await this.todo.findElement(By.css(".destroy")) })
                .press()
                .release()
                .pause(500);
                
            await actions.perform();
        })();
    }
}