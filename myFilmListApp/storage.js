function Storage(){

}

Storage.prototype.getFilmsFromStorage = function(){
    let films;
    if(localStorage.getItem("films") === null)
    {
        films = [];
    }
    else
    {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

Storage.prototype.addFilmToStorage = function(newFilm) {

    let films = this.getFilmsFromStorage();
    // parametre olarak gelen newFilm objesini storage'a ekleyelim.

    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));


}