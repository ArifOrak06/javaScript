// const person  = {
   // age:25,
   // tellAge : function() {
      //  console.log(this.age); // this anahtar kelimesi person scope'unu gösterir.
   // }

    //method içerisinde değil de  obje içerisinde tanımlanan this anahtar kelimesi ise
    // doğrudan global scope yani window objesini gösterir. bunun karıştırılmaması gerekmektedir.
// }


// person.tellAge()

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // GEt Request

    get(url,callback){
        this.xhr.open("GET",url);  // this = objeyi gösterir. ve bağlantı açık.
       
        this.xhr.onload = () => {
            if(this.xhr.status === 200){  // this obje içerisindeki gösterir
         
                callback(null,this.xhr.responseText); // null hata durumu hata yoksa null varsa hata mesajı
            }
            else{
                // Hata durumu
                callback("Herhangi bir hata oluştu",null); // hata olduğundan dolayı response data dönülmedi.Bu nedenle null olarak belirttik.
            }
        };

        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON verisi gönderileceği bildiriliyor.
        this.xhr.onload = () => {
            if(this.xhr.status === 201){  // 201 Status Code : Created
                callback(null,this.xhr.responseText);
            }else{
                callback("Herhangi bir hata oluştu.",null);
            }
        };

        this.xhr.send(JSON.stringify(data));// parametre olarak gelen yani gönderilecek veriyi JSON'a çevirdik.
    }
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else
            {
                callback("Put Request :  bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){
        this.xhr.open("DELETE",url);
        

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else
            {
                callback("Put Request :  bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }




}

// get scope içerisinde kullanılan this keywordü request objesini gösterir
// ancak get içerisinde tanımlanan yeni bir fonksiyon içerisindeki this keywordu ise doğrudan
// obje constructor'ında tanımlanan  Xhr değişkenini gösterecektir. 
// ancak her daim this anahtar kelimesinin objenin kendisini göstermesini istersek yapmamız gereken
// get methodu içerisinde yer alan onload fonksiyonun bitimi ile bind methodunu tetiklemek ve içerisine this keywordünü yazmak
// gerekmektedir.

// ancak hiç bind kullanmadan onload methodunu arrow function olarak tanımlarsak arrow function içerisinde kullanılan
// this keywordü de doğrudan objeyi gösterecektir.
// daha da önemlisi biz console'a yazdırırsak, get isteğinden dönen veriyi bir başka değişkene atamasını yapamayacağız. ATamasını 
// yapabilmek için burada callback fonksiyonu kullanmamız gerekmektedir.


// https://jsonplaceholder.typicode.com/posts

const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/posts",function(err,response){
//     if(err === null){
//         // başarılı
//         console.log(response)
//     }else{
//         console.log(err);
//     }
// });


// request.post("https://jsonplaceholder.typicode.com/albumss",{userId:2,title:"Deneme Test"},function(err,response){
//     if(err === null){
//         console.log(response);
//     }
//     else
//     {
//         console.log(err);
//     }
// });


// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId :2,title:"DenemeTest"},function(err,response){
//     if(err === null){
//         console.log(response);
//     }
//     else
//     {
//         console.log(err);
//     }
// });

request.delete("https://jsonplaceholder.typicode.com/albums/10",{userId :2,title:"DenemeTest"},function(err,response){
    if(err === null){
        console.log(response);
    }
    else
    {
        console.log(err);
    }
});