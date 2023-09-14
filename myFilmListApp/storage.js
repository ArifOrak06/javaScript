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
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
     let films = this.getFilmsFromStorage();
     // Yukarıda tüm storage'ları obje olarak çeken methodu tetikledik.
     // dahasonra içerisinde gezinerek film objelerinin title'ı parametre olarak 
     // gönderilen title ile eşit olanı splice methodu ile sildik.
     // splice kendisine verilen index numarasından başlar ve verilen rakam kadar eksiltme yapar.
     
     films.forEach(function(film,index){
        if(film.title == filmTitle){
            films.splice(index,1);
        }
     });
     // eksiltme yaptıktan sonra storage'a son şekliyle yeniden set etmek gerekir.

     localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}