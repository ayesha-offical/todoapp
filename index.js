#! /usr/bin/env node
//for file exicution
//SHABANG 
import inquirer from "inquirer";
import chalk from "chalk";
let todoapp = [];
let condition = true;
while (condition) {
    let addtodo = await inquirer.prompt([
        {
            name: "todolist", // ask to add in your todo list
            type: "input",
            message: chalk.yellowBright("what do you want add in your todolist: "),
            validate: (input) => {
                if (input.trim() === "") { //this method for whitespace if you want (it print a message(plz add something))
                    return "plz add something";
                }
                return true;
            },
        },
        {
            name: "addmore", // ask to add more thing in your todo list
            type: "confirm",
            message: chalk.yellowBright("do you want to add more in your todolist: "),
        }
    ]);
    todoapp.push(addtodo.todolist);
    condition = addtodo.addmore;
    console.log(todoapp);
}
;
// ask to remove any one in your todo list
let removeoneofthesething = await inquirer.prompt(/// confirm that you remove one thing in your todoapp
[
    {
        name: "remove",
        type: "confirm",
        message: chalk.yellowBright("do you want to remove anyone todo?"),
        default: "false"
    }
]);
if (removeoneofthesething.remove) {
    let removetodowhichisselectforremove = await inquirer.prompt(// select to remove oneof these option
    {
        name: "todoremove",
        type: "list",
        message: chalk.yellowBright("select one in these option: "),
        choices: todoapp
    });
    const indexRemove = todoapp.indexOf(removetodowhichisselectforremove.todoremove);
    if (indexRemove !== -1) {
        todoapp.splice(indexRemove, 1);
    }
}
//ask to update your todoappp
let updateyourtodo = await inquirer.prompt({
    name: "update",
    type: "confirm",
    message: chalk.yellowBright("do you want to update your todos: "),
    default: "true"
});
if (updateyourtodo.update) {
    let updateoneofyourfavourite = await inquirer.prompt([
        {
            name: "updatethetodo",
            type: "list",
            message: chalk.yellowBright("select one to update your todo"),
            choices: todoapp,
        },
        {
            name: "updatedtodo",
            type: "input",
            message: chalk.yellowBright("enter new one to update your todo: ")
        },
    ]);
    const indextoupdate = todoapp.indexOf(updateoneofyourfavourite.updatethetodo);
    if (indextoupdate !== -1) {
        todoapp[indextoupdate] = updateoneofyourfavourite.updatedtodo;
    }
}
// print all todos in each line
console.log(chalk.greenBright("your all todos: "));
todoapp.forEach(todo => {
    console.log(chalk.greenBright("." + todo));
});
console.log(chalk.blue.bold("\n\tTHANKS! FOR USING MY TODO APP :)\n\t"));
