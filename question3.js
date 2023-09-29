let myTask = [];
//adding to the array
let addtask = (task)=>{

    let lenght = myTask.push(task);
    console.log("task "+task+" was added to tasks");    
    return lenght;
}

let listAllTasks =()=>{
    myTask.forEach((item)=>{
        console.log(item);
    })
    
}
//deleting from the array
let deleteTask = (task)=>{
    let index = myTask.indexOf(task);
    if (index > -1){
        myTask.splice(index, 1);
    console.log("task: "+task+" has been removed from the array");
    } 
    else{
        console.log("task: "+task+" not found in tasks!");

    }
    return myTask.length;
}
//calling the functions
addtask("learn js!");
listAllTasks();
deleteTask("learn js!");
deleteTask("learn j1111s!");


// (a) Create an array of strings.----------
// (b) Create an addTask function: -------
// i. It receives a string as a parameter called task.-------------
// ii. It adds the task to the array. ----------------
// iii. It prints a message in the console indicating the insertion.----------------------
// iv. It returns the number of elements in the array after the insertion.
// (c) Create a listAllTasks function:
// i. It iterates over all the tasks in the array.
// ii. It prints each array item in the console.
// (d) Create a deleteTask function:
// i. It receives a string as a parameter called task.
// ii. It removes that string from the array.
// iii. It prints in console a message indicating the deletion.
// iv. It returns the number of elements in the array after the deletion