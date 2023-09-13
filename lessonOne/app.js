const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter");

const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){
    // Tüm event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){
    if(confirm("Tüm todoları silmek istediğinize eminmisiniz ? "))
    {
        // arayüzden silmenin ilk yöntemi yavaş çalışır.
        // todoList.innerHTML = "";
        // arayüzden silmenin ikinci yöntemi daha hızlı çalışır.

        while(todoList.firstElementChild != null){
            // buradaki şartımız sağlanana kadar while döngüsü çalışacaktır.
            // firstElementChild herhangi bir elementin ilk çocuğu varsa döner yoksa null döner
            // bizde while ile herhangi bir çocuğu olmayana kadar yani null dönene kadar silmesini istedik
            // çocuk kalmayınca firstElementChild null dönecek ve döngü sonlandırılacaktır.
            todoList.removeChild(todoList.firstElementChild);
        }
        // arayüzden sildikten hemen sonra localStorage'dan da silelim.
        localStorage.removeItem("todos"); // parametre olarak kayıtlı olan key değerini vermemiz yeterli olacaktır.
    }
}
function filterTodos(e){
    // Filtreleme işlemi
    //burada yapmak istediğmiiz öncelikle filter input alanı içerisine girilen karakterleri bir değişkene set edip
    // daha sonra todolarımız içerisinde yer alan ile karakter olarak eşitlenenlerin css display : block eşleşmeyenleri ise 
    // görünmemesi için display:none yapacağız, ancak burada en önemli husus bootstrap'in d-flex özelliği bizim dinamik olarak 
    // uygulayacağımız inline css'i ezeceğinden dolayı display etki etmeyecektir. o nedenle inline css kodlarının sonuna d-flex'in 
    // dinamik olarak verdiğimiz kodu ezmemesi için !important kodunuda ekleyeceğiz.

    // kullanıcı tarafından girilen değeri seçtik.
    const filterValue = e.target.value.toLowerCase();
    // todoların yer aldığı li elementlerinin tamamını seçtik 
    const listItems = document.querySelectorAll(".list-group-item");
    // şimdi li elementleri içerisinde gezinerek her birinin textContent'i ile input alanına girilen 
    // değerlerle uyuşanları seçeceğiz.
    listItems.forEach((listİtem) => {
        const text = listİtem.textContent.toLowerCase();
        if(text.indexOf(filterValue) == -1){
           
            // indexOf methodu içerisine parametre olarak verilen değeri bulamazsa -1 rakamını döner eğer bulursa bulduğu indexi döner.
             // bulamadığu durumlarda üzerinde gezindiğimiz li elementinin display özelliğini none yapacağız.
             listİtem.setAttribute("style","display : none !important");


        }else
        {
            // bulunursa 
            listİtem.setAttribute("style","display : block");
        }
    })
}


function deleteTodo(e){
    if(e.target.className == "fa fa-remove")
    {
        e.target.parentElement.parentElement.remove(); // UI'dan silindi.
        deleteTodoToFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success",`${e.target.parentElement.parentElement.textContent} başlıklı Todo başarılı bir şekilde silinmiştir.`)
    }else{

    }
}

function deleteTodoToFromStorage(deletetodo){
    // öncelikle local storage'da kayıtlı bütün todoları alıyoruz
    // ve parametre olarak gelen todo ile eşit olanı bulup todolar içerisinden çıkartıyoruz.
    let todos = getTodosFromStorage();
    todos.forEach((todo,index) => {
        todos.splice(index,1); //splice o indexten itibaren bir tane obje siler.

    });
    // son olarak todos arrayini son şekliyle tekrardan storage'a set ediyoruz.
    localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();
    todos.forEach((todo) => {
        addTodoToUI(todo);
    });
}
function addTodo(e){
    const newTodo = todoInput.value.trim(); // trim bir ifadenin başına veya sonuna eklenen boşlukları keser.
    if(newTodo === ""){

        showAlert("danger", "Bir todo giriniz...");
    }else{

        addTodoToUI(newTodo); // arayüze ekleyecek method.
        addTodoToStorage(newTodo);
        showAlert("success","Todo başarılı bir şekilde eklenmiştir.");

    }



    e.preventDefault();



}
function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos") == null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}


function showAlert(type,message){

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;

    alert.textContent = message;
    firstCardBody.appendChild(alert);
    // bilgilendirme mesajı 2 saniye sonra silinmesini istiyoruz setTimeOut

    setTimeout(() => {
        alert.remove()
    }, 2000);


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

    // todo eklendikten sonra kullanıcının todo başlığı girdiği veriyi temizleyelim inputu boşaltalım.
    todoInput.value = "";


}