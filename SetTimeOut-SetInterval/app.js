// setTimeout(function(){
//     console.log("Merhaba")
// },2000);

// settimeout methodu içerisine girilen logici  
// parametre olarak verilen süre kadar tetikler daha sonra sona erer.


// SET INTERVAL

// let i  = 0;
// setInterval(function(){
//     i++;
//     console.log("Sayı : ",i);
// },1000);

// içerisine parametre olarak verilen süre aralıkları ile logici tetikler.

// ancak buradaki sorun şu ki sonsuz bir tetikleme yapacaktır. bunu durduyrmak için ise 
// clear ınterval isimli methodu kullanmalıyız.
// let  i = 0;
// let value = setInterval(function(){
//     i++;
//     console.log("Sayı : ",i);
// },1000);  

//  clear interval yapısını kullanabilmek ve intervali durdurduğunu daha iyi görebilmek adına bir butona event atayarak deneme yapabiliriz.
//  Öncelikle index.html içerisinde 
// const stopButton = document.getElementById("btn");

// stopButton.addEventListener("click",function(){
//     clearInterval(value);
// });

// durdur butonuna basıldığında interval duracaktır.

// callBack Fonksiyonları

// Başka bir fınksiyonlara parametre olarak gönderilebilen fonksiyonlardır.

// forEach içerisinde kullanılan function bir callback fonksiyondur.


// Bir örnekle bu duruma açıklayalım

// function process1(callback){
//     setTimeout(function(){
//         console.log("Process 1");
//         callback();
//     },3000);
// }

// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000);
// }

// process1(process2);

// Bir başka asenkron durumu yönetelim

// const langs = ["Python","Java","C#"];

// function addLang(lang){
//     setTimeout(function(){
//         langs.push(lang);
//         console.log("Eklendi.");
      
//     },2000);
// }

// function getAllLangs(){
//     setTimeout(function(){
//         langs.forEach(function(){
//             console.log(lang);
            
//         })
//     },1000);
// }

// addLang("Javascript");
// getAllLangs();

// Yukarıdaki durumlar incelendiğinde önce bir veri ekleme fonksiyonu tetikleniyor ancak
// Veri ekleme işlemi daha önce başlatılıyor, listeye parametre olarak bir verinin eklemesi
// ancak 2 saniye sonra gerçekleşecek şeklinde ayarlanıyor. HEmen arkasından ise listeleme operasyonu yapılıyor
// Buradaki asenkron duruma göre listeye son eklenen veri listeleme methodunda gözükmeyecek çünkü veri eklenmeden listeleme
// çalışcak saniyesi 1000 sn olarak ayarlandığı için biz bu gibi durumlarda callback methodları kullanırız ki süreçleri kontrol edebilelim
// veride tutarsızlık olmasın diye.

// Bunuda yapmak için
const langs = ["Python","Java","C#"];

function addLang(lang,callBack){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi.");
        callback();
      
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(){
            console.log(lang);
            
        })
    },1000);
}

addLang("Javascript",getAllLangs);
