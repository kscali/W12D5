let todos = [];

const ul = document.querySelector(".todos");
const form = document.querySelector(".add-todo-form");

function addTodo(e) {
    e.preventDefault();
    let input = document.getElementById("add-todo").value;
    let todoList = {todo: input, done: false};
    todos.push(todoList);
    input.innerHtml = "";
    debugger
    populateList(todos);
    
    let myStorage = window.localStorage;
    // debugger; 
    let keys = [];
    todos.forEach ( (obj) => {
        keys = Object.keys(obj);
        keys.forEach( key => {
            let value = JSON.stringify(obj[key]);
            key = JSON.stringify(key);
            myStorage.setItem(key, value);
        })
        
    })
    const items = [];
    keys.forEach( (el) => {
        items.concat(JSON.parse(myStorage.getItem(el)));
    })
    

  // To store, we stringify
  // retrieve we parse
  // localStorage.setItem(key, value);

  
  myStorage = window.localStorage;
   todos = [];
}

function populateList(todos) {
    todos.forEach(el => {
     
      let label = document.createElement('label');
      
      label.innerHTML = el["todo"];
      
      let checkbox = document.createElement('radio');
      label.appendChild(checkbox);

      let li = document.createElement('li');

      li.appendChild(label);
      ul.appendChild(li);
      
    })
   
}

let button = form.querySelector("#submit");
button.addEventListener("click", addTodo);




