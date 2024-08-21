const todoInput = document.querySelector("#todoInput");
const todoAddBtn = document.querySelector("#todoAddBtn");

const todoListBox = document.querySelector("#todo-list-box");

function createNewTodo() {
  let toDo = todoInput.value;

    if(toDo === ""){
        alert("Error: Please Enter Your To do First")
        return;


    }else{

        let todoList = document.createElement("div");
        todoList.classList.add("todo-list");
      
        let todoDoneUndoneIcons = document.createElement("div");
        todoDoneUndoneIcons.classList.add("todo-don-icon");
        todoDoneUndoneIcons.innerHTML = `
                              <i class="ri-circle-line undone-todoIcon"></i>
                          <i class="ri-checkbox-circle-fill doneTodoIcon" ></i>
          `;
      
        let todoEL = document.createElement("p");
        todoEL.innerHTML = `${toDo}`;
      
        let delIcon = document.createElement("div");
        delIcon.classList.add("todo-del-icon");
      
        delIcon.innerHTML = `<i class="ri-close-line"></i>`;
      
        todoList.appendChild(todoDoneUndoneIcons);
        todoList.appendChild(todoEL);
        todoList.appendChild(delIcon);
        todoListBox.appendChild(todoList);
      
        let undoneIcons = todoDoneUndoneIcons.querySelector(".undone-todoIcon");
        let doneIcons = todoDoneUndoneIcons.querySelector(".doneTodoIcon");
        undoneIcons.addEventListener("click", () => {
            undoneIcons.style.display = "none";
            doneIcons.style.display = "block";
          });
          
          doneIcons.addEventListener("click", () => {
              undoneIcons.style.display = "block";
              doneIcons.style.display = "none";
          });
          
          let toDelIcon = delIcon.querySelector(".todo-del-icon i");
          
          toDelIcon.addEventListener("click", () => {
              todoListBox.removeChild(todoList);
          });
          
    }
}


todoAddBtn.addEventListener("click", () => {
//   console.log("Clikced");
  createNewTodo();
  todoInput.value = "";
});

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createNewTodo();
        todoInput.value = "";
    }
});
