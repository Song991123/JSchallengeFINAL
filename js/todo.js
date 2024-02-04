/** crateDate : 2024-02-04
 *  목적 : 로컬 스토리지를 사용한 투두 리스트 js **/


const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList  = document.getElementById("todo-list");

let toDos = [];

// --------------- Strings ---------------
const TODOS_KEY = "todos";

// --------------- Functoins ---------------
function saveToDos(newTodo){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.innerText = newTodo.text;
    
    const button = document.createElement("button");
    button.innerText = "✓";
    button.addEventListener("click", deleteToDo);

    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => parseInt(li.id) !== todo.id);
    saveToDos(toDos);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id  : Date.now(),
    }

    toDos.push(newTodoObj);
    saveToDos(newTodoObj);
    paintTodo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
