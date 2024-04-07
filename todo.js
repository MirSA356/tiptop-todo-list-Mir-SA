import inquirer from "inquirer";
let todoString = [];
let loop = true;
while (loop) {
    const todoInput = await inquirer.prompt([
        {
            type: "input",
            name: "todoItem",
            message: "Enter your favorite items names in your TO-DO list"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you wnat to add more items in your TO-DO list",
            default: false
        }
    ]);
    const todoItem = todoInput.todoItem;
    const addMore = todoInput.addMore;
    if (todoItem) {
        todoString.push(todoItem);
    }
    loop = addMore;
}
;
if (todoString.length > 0) {
    console.log(`Here is your TO-DO list:`);
    for (let i = 0; i < todoString.length; i++) {
        console.log(`${i + 1}. ${todoString[i]}`);
    }
}
else {
    console.log(`Your TO-DO list is Empty!`);
}
