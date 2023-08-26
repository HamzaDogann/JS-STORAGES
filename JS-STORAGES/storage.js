//! S e s s i o n   S t o r a g e


//! Site üzerinde key - value ile değer depolar(web sayfası kapatılınca değerler gider.)

//Değer ekleme // Add value
sessionStorage.setItem("201","Hamza");
sessionStorage.setItem("202","Enes");
sessionStorage.setItem("203","Sezer");

// Değer silme  // Remove value
sessionStorage.removeItem("203");

sessionStorage.getItem("202"); //todo | Bana key ver ona tekamül eden value'yi getiririm.

let value = sessionStorage.getItem("201");
if(value === null){
    console.log("Değer bulunamadı");
}
else{
    console.log("Değer bulundu :",value);
}



//Değerlerin Hepsini silmek istersen. If you want to delete all of them.

sessionStorage.clear();

//Session Storage - Array Yazdırma

let names = ["hamza","ali","veli","hacı"];

sessionStorage.setItem("names",names) //todo : 1.Names "Key" - 2.Names array dizimiz.

let value3 = sessionStorage.getItem("names"); 
console.log(value3);

//! Ancak yukardaki kod string olarak dönüyor gerçek bir Array tepkisi vermez.

//! Aşağıda Gerçek bir array çıktısı veren session storage örneği var...


let isim = ["Hamza","Ali","Doğan","Okan"];

sessionStorage.setItem("names".JSON.stringify(names));

let deger = JSON.parse(sessionStorage.getItem(isim));

console.log(deger);

//! Burada  gerçek bir Array tepkisini almış olduk.






//! L o c a l   S t o r a g e  - 
//? Burada yapılan işlemler web sayfası kapansa dahi duracaktır. Yani Local website veritabanımızdır.


// Değer ekleme
localStorage.setItem("1","Hamza");
localStorage.setItem("2","Mehmet");
localStorage.setItem("3","Okan");
localStorage.setItem("4","Mustafa");

//Değer alma

let valueNEW = localStorage.getItem("1");  //todo : Local storage'de "HAMZA" değerini göreceğiz.

localStorage.removeItem("2"); //todo : Keyi "2" olanı yok et.

localStorage.clear(); //todo : Bütün storage silindi.

// Arraylar içinde aynı işlemler....