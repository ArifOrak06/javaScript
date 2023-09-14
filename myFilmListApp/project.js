const form = document.querySelector("#film-form");
const titleElement  = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilm = document.getElementById("clear-films");
// UI Objesini başlatmak

const ui = new UI();
// Storage objesini başlatmak 
const storage = new Storage();


// Tüm eventleri yükleme

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clearFilm.addEventListener("click",clearAllFilms);
};


function clearAllFilms(){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
}


function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);

        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
    }
}


function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url ==="")
    {
        ui.displayMessage("Tüm alanları doldurmanız gerekmektedir.","danger");
    }
    else
    {
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Storage'a film Ekleme
        ui.displayMessage("Film başarılı bir şekilde eklenmiştir.","success");
    }

    ui.clearInputs(titleElement,directorElement,urlElement); 
    e.preventDefault();
}