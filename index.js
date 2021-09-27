// Arrays to keep track of each task's state
//instead of arrays, we'll use a function to store data inside an object to create and keep track of tasks
// Create a new task by adding to the arrays
// A new task will be created as incomplete
let tasks = [];

function newTask(title, description) {
  const task = {
    title : title,
    description : description,
    complete : false,

    completeTask: function (task) {
      this.complete = true;
    },
    
    logTaskState: function (task) {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
    
  };
  tasks.push(task);

  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// // Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box" ); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1

//now see all pending tasks

task1.logTaskState(task1); // Clean Cat Litter has not been completed
task1.completeTask(task1);
task1.logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
