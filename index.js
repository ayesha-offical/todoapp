#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//for file exicution
//SHABANG 
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var todoapp = [];
var condition = true;
while (condition) {
    var addtodo = await inquirer_1.default.prompt([
        {
            name: "todolist", // ask to add in your todo list
            type: "input",
            message: chalk_1.default.yellowBright("what do you want add in your todolist: "),
            validate: function (input) {
                if (input.trim() === "") { //this method for whitespace if you want (it print a message(plz add something))
                    return "plz add something";
                }
                return true;
            },
        },
        {
            name: "addmore", // ask to add more thing in your todo list
            type: "confirm",
            message: chalk_1.default.yellowBright("do you want to add more in your todolist: "),
        }
    ]);
    todoapp.push(addtodo.todolist);
    condition = addtodo.addmore;
    console.log(todoapp);
}
;
// ask to remove any one in your todo list
var removeoneofthesething = await inquirer_1.default.prompt(/// confirm that you remove one thing in your todoapp
[
    {
        name: "remove",
        type: "confirm",
        message: chalk_1.default.yellowBright("do you want to remove anyone todo?"),
        default: "false"
    }
]);
if (removeoneofthesething.remove) {
    var removetodowhichisselectforremove = await inquirer_1.default.prompt(// select to remove oneof these option
    {
        name: "todoremove",
        type: "list",
        message: chalk_1.default.yellowBright("select one in these option: "),
        choices: todoapp
    });
    var indexRemove = todoapp.indexOf(removetodowhichisselectforremove.todoremove);
    if (indexRemove !== -1) {
        todoapp.splice(indexRemove, 1);
    }
}
//ask to update your todoappp
var updateyourtodo = await inquirer_1.default.prompt({
    name: "update",
    type: "confirm",
    message: chalk_1.default.yellowBright("do you want to update your todos: "),
    default: "true"
});
if (updateyourtodo.update) {
    var updateoneofyourfavourite = await inquirer_1.default.prompt([
        {
            name: "updatethetodo",
            type: "list",
            message: chalk_1.default.yellowBright("select one to update your todo"),
            choices: todoapp,
        },
        {
            name: "updatedtodo",
            type: "input",
            message: chalk_1.default.yellowBright("enter new one to update your todo: ")
        },
    ]);
    var indextoupdate = todoapp.indexOf(updateoneofyourfavourite.updatethetodo);
    if (indextoupdate !== -1) {
        todoapp[indextoupdate] = updateoneofyourfavourite.updatedtodo;
    }
}
// print all todos in each line
console.log(chalk_1.default.greenBright("your all todos: "));
todoapp.forEach(function (todo) {
    console.log(chalk_1.default.greenBright("." + todo));
});
console.log(chalk_1.default.blue.bold("\n\tTHANKS! FOR USING MY TODO APP :)\n\t"));
