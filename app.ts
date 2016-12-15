class Todo {
  task: string;

  constructor(task: string){
    this.task = task;
  }
}

function addTodo(){
  console.log("function activated");
  let input = <HTMLInputElement>document.getElementById("userInput")
  console.log("user input" +input);
  let storedInput = input.value;
  console.log("this is input.value" + storedInput);
}
