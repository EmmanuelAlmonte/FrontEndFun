let user_choice = prompt("What would you like to do? ")
user_choice == user_choice.toLowerCase()

let todoList = []


while(user_choice !== "quit"){
    if(user_choice == "new"){
        let newTodo = prompt("add a Todo: ")
        todoList.push(newTodo)
        if(newTodo == todoList[-1])
        continue
    }
    else if (user_choice == "list"){
        console.log(todoList)
    }
    else if (user_choice == "delete"){
        let deleteTask = prompt("Enter what to delete")
        for(task of todoList){
            if(task == deleteTask)
            todoList.splice([todoList.indexOf(task)], 1)
        }
    }
    else{
        user_choice = prompt("Please press enter to try again!!")
    }
    user_choice = prompt("What would you like to do?")
}
