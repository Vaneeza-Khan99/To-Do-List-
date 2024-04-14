#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todoList"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "What would you like to add more to your todoList",
            default: "true"
        }
    ]);
    todos.push(todosQuestions.firstQuestion);
    condition = todosQuestions.secondQuestion;
    console.log(todos);
}
