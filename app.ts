function addTodo(){
  let input = <HTMLInputElement>document.getElementById("userInput")
  let storedInput = input.value;
  if(storedInput === ""){
    storedInput = ""
    alert("please enter a todo item");
  }else{
  let todo1 = new MyApp.Todo(storedInput);
  document.getElementById("results").innerHTML += "<li>" + todo1.task + "</li>";
  clearForm();
}
function clearForm(){
  if(document.getElementById){
    document.form.reset();
  }
}
}
