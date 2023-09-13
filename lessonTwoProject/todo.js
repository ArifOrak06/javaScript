const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll("#card-body")[0];
const secondCardBody = document.querySelectorAll("#card-body")[1];

const filter = document.querySelector("#filter");

const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
}


function addTodo(e){
    const newTodo = todoInput.value.trim(); // trim bir ifadenin başına veya sonuna eklenen boşlukları keser.

    addTodoToUI(newTodo); // arayüze ekleyecek method.



    e.preventDefault();



}

function addTodoToUI(newTodo){
    // <!-- <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li>-->

    // listİtem oluşturmak
    const listItem = document.createElement("li");

    // link elementi oluşturmak
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    // parametre olarak gelen string ifadeyi yeni oluşturduğumuz listItem elementine ekleyelim.E
    // Bir text node olarak ekleyelim.

    listItem.appendChild(document.createTextNode(newTodo));
    // yukarıda oluşturduğumuz linki elementini de listItem elementinin içerisine ekleyelim.
    listItem.appendChild(link);

    // son olarak yukarıda seçtiğimiz ul elemetinin içersiine yeni listItem elementimizi ekleyelim ve arayüze eklenme işini bitirelim.
    todoList.appendChild(listItem);
    


}