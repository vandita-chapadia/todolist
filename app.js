//selectors

 const todoInput = document.querySelector('.todo-input');
 const todoButton = document.querySelector('.todo-button');
 const todoList = document.querySelector('.todo-list');
 const filterOperation=document.querySelector('.filter-todo');
//Event Listeners
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck);
filterOperation.addEventListener('click',filterTodo);
//Function
function addTodo()
{
    event.preventDefault();

    const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
  
      const newTodo = document.createElement("li");
      newTodo.innerHTML=todoInput.value;
      newTodo.classList.add('todo-item');
      todoDiv.appendChild(newTodo); 

      const completedButton = document.createElement('button');
      completedButton.innerHTML='<i class="fa fa-check"></i>';
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);   
       
       
      const trashButton = document.createElement('button');
      trashButton.innerHTML='<i class="fa fa-trash"></i>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);   
       
      todoList.appendChild(todoDiv);  
      todoInput.value="";

}

function deleteCheck(e){
 
    const item = e.target;

    if(item.classList[0]==="trash-btn")
    {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitioned',function(){
        todo.remove();
        });
        
       
    }

    if(item.classList[0]==="complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
 const todos = todoList.childNodes;
 todos.forEach(function(todo){
  switch(e.target.value){
      case "all":
        todo.style.display="flex";
         break;
      case "completed":
          if(todo.classList.contains('completed')){
              todo.style.display="flex";
          
          }
          else{
              todo.style.display="none";
          }
          break;
      case "uncompleted":
            if(!todo.classList.contains('completed')){
                todo.style.display="flex";
            
            }
            else{
                todo.style.display="none";
            }
            break;

  }
 });

}
