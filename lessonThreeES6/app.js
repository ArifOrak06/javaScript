// JAVASCRİPT OOP ES6 ÖNCESİ

// Yapıcı Method - Constructor

// function Employee(name,age,salary){
//     this.name= name;
//     this.age = age;
//     this.salary=salary;

 
// }

// const emp1 = new Employee("Arif",32,37000);  

// emp1.showInfos();

// Not : Javascript prototype tabanlı bir yapıya sahiptir.
// Bu nedenle base class'dan türetilen classların base class'ın prototype'ında tanımlanan methodları da miras olarak alırlar
// bu sayede base Class'ın prototypeından diğer dtüretilen bütün classlara method tanımlamak istersek  baseClass'ın prototype içerisinde 
// prototype sayesinde diğer classlarda da yer alacak değişken field, funksiyonları tanımlayabiliriz.

// prototype içerisine herhangi bir yapı inşa etmek istersek burada yapmamız gereken iş;

// this.toString = function(){
//     console.log("Bu bir base employee objesidir.");
// }
// şeklinde atama yapılmaktadır.

// Prototype'ın diğer özelliği ise çok büüyük avantaj sağlamaktadır. Bu özellik normalde base class içerisinde 
// tanımlanan herhangi bir function base'den türetilen bütün class'lara da kopyalanır, 100 yeni class türetülirse 
// 100 kopya ve 100 bellekte yer kaplama oranı düşümüldüğünde belleğe fazlaca yük binmiş olacak, bu nedenle base classın
// prototipinde tanımlanırsa  her kalıtılan objede kopya oluşmayacak tamamı base classın prototipine ulaşarak ilglili methodu kullanacaktır.

// Peki yukarıda da anlatıldığı üzere baseClassın prototipinde nasıl değer atayacağız. ? 

// Employee.prototype.showInfos = () => {
//     console.log(this.name + this.age);
// }
// artık base class olan Employeee classından kalıtılan tüm objeler base classın prototipine ulaşabileceği için hepsi bellekte kopyalanmadan bu methodu kullanabilecekler.


// Object oluşturmanın farklı bir yöntemi

// objeler arasında birbirlerinin prototiplerini kalıtmak için Object.create() methodu kullanılmaktadır

// function Person(age,name){
//     this.name = name;
//     this.age = age;

// }

// Person.prototype = Object.create(Person.prototype);

// prototype Tabanlı kalıtım
 
// function Person(name,age){
//     this.age = age;
//     this.name = name;
// }

// Bir fonksiyon prototype'ında tanımlanan method kalıtlılan diğer fonksitonlarada  geçer. Hatta miras alan
// fonksiyon miras aldı fonksiyonun prototypında tanımlanan methodu override edebilir yeniden düzenleyebilir.Employee

// function Employee(name,age,salary){

//     this.name = name;
//     this.age = age;
//     this.salary = salary;

// }

// Şimdi Employee() fonksiyonu Person fonksiyonundan kalıtalım

// Employee.prototype = Object.create(Person.prototype);


// Artık kalıtım gerçekleşti.

// kalıtımı birde Call fonksiyonıu ile yapalım

// function Employee(name,age,salary){

    // this.name = name;
    // this.age = age;
//     Person.call(this,name,age); // parametre olarak aldığımız age ve name Person function'a gönderilecek + olarak birde this
    // anahtar kelimesi artık Person'ın scope'ını gösterecek Employee classını değil. Çünkü call ile Employee objesini Person'a gönderdik.
//     this.salary = salary;

// }


// Call, Apply ve Bind mantığı

// Birbirlerine mantık olarak çok benzemektedirler, ancak bazı noktalarda ayrılmaktadırlar.

// Sırasıyla inceleyelim
// const obj1 = {
//     number1:10,
//     number2:20
// }

// const obj2 = {
//     number1:10,
//     number2:20
// }


// function addNumbers(number3,number4){
//     console.log(this.number1 + this.number2+ this.number3 + this.number4);
// }

// addNumbers()  fonksiyonu içerisinde kullanılan this anahtar kelimesi herhangi bir constructor içerisinde kullanılmadığı için doğrudan 
// global scope olan window onjesini göstermektedir. ancak this anahtar kelimesinin obj1'i göstermesi
// istersek bunun için call,apply kullanmamız gerekmektedir. Bu nedenle, artık addNumbers fonksiyonu içerisinde kullanılan 
// this anahtar kelimesi obj1 scope'sini gösterecektir.

// addNumbers.call(obj1,100,200);
// addNumbers.apply(obj1,[100,200]);

// bind fonksiyonu : bu fonksiyon ise call ve apply ile aynı işleve sahip ancak ttek farkı içerisine aldığı obje ile yeni parametrelerden yeni bir kopya fonksiyon oluşturmaktadır
// bu fonksiyonu başka scope'larda da kullanabiliriz. En büyük avantajı budur. GEnellikle this anahtar kelşmnesinin karışma ihtimali olan alanlarda kullanılmaktadırç

// function getNumbersTotal(number3,number4){

//     return this.number1 + this.number2+ number3+ number4;
// }

// const copyFunc1 = getNumbersTotal.bind(obj1);

// yukarıda da görüleceği üzere obj1 ile birleştirilen yeni bir fonksiyon başka bir değişkene kopyalandı.ARtık o değişken üzerinden istenildiği şekilde tüm parametrelere ulaşılabilir.


// ProtoType Tabanlı Kalıtım - Inheritance
 

// ES6 STANDARTLARI

class Employee{

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim : " +  this.name + "Yaş: " + this.age + "Maaş : ")
    }
}

const emp = new Employee("Arif",32,4500);

emp.showInfos();

// Statik Methodlar

class Matematik {
    static cube(x){
        console.log(x*x*x);
    }
}

// method statik olduğu için yeniden instance alınmadan kullanılabilir.

