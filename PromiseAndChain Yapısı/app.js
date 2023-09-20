// Promise ve Chain Yapısı
// Apiye yapılan isteklerde client apiden sonuç olumlu veya olumsuz olarak dönüş için beklendiği duruma
// pending durumu denmektedir. Olumsuz sonucun state'i rejected olarak döner ve catch ile yakalanır, olumlu s
// sonuç state'i ise resolved olarak döner ve then ile yakalanır.


function getData(data){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("olumlu sonuç");
        },10000);
    });

}


console.log(getData("Merhaba"));