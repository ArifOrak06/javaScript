function UI(){

}

UI.prototype.addFilmToUI = (newFilm) => {
//     <!-- <tr>
//     <td><img src="" class="img-fluid img-thumbnail"></td>
//     <td></td>
//     <td></td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//   </tr> -->

    const filmList  = document.getElementById("films");
    filmList.innerHTML += `
    
            <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> 
    
    
    
             `;

}

UI.prototype.clearInputs = (element1,element2,element3) => {
    element1.value = "";
    element2.value = "";
    element3.value = "";

}

UI.prototype.displayMessage = function(message,type){
    // bilgilendirme mesajının ekleneceği element
    const cardBody = document.querySelector(".card-body");

    // alert divi oluşturma

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    // bilgilendirme mesajı 2 sn sonra silinsin.
    setTimeout(function(){
        div.remove();
    },2000);
}

UI.prototype.loadAllFilms  = function(films){
    const filmList = document.getElementById("films");

    //Storage'dan alınan ve methodumuza parametre olarak gönderilen films üzerinde döngü yardımı ile gezinerek 
    // indexte yer alan tablomuza tr etiketi olarak ekleyelim.

    films.forEach(film => {
        filmList.innerHTML += `
        
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
    
        
        
        `;
    });
}

UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");
    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }
}