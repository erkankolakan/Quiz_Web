 //OPP ; Nesne Tabanlı Programlama
 //OPP nin temelinde obje yatar.
 //Objeler aslında tek bir değişkenle birden fazla farklı değerleri key => valu şeklinde depolanmasıdır.

function Soru(sorMetni, cevapSecenekleri , dogruCevap){
    this.sorMetni = sorMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevaiKontrolEt = function(cevap){
        return cevap === this.dogruCevap
    }
}
//  this yazmamızın sebebi üretilecek olan koplayanın soruMetni alanına dışardan gelen soruMetni ni atayalım.

let soru1 = new Soru("Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Nuget" , c:"Npm"} , "b");

console.log(soru1.sorMetni);
console.log(soru1.dogruCevap);
console.log(soru1.cevaiKontrolEt("c"));

console.log(soru2.sorMetni);
console.log(soru2.dogruCevap);
console.log(soru2.cevaiKontrolEt("c"));










// // ya da her soruya bir değişken atamaya gerek yok bir dizi içerisinde index numralı ile sorularımızı çağıra biliriz.

// let sorular = [
//     new Soru("1 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
//     new Soru("2 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
//     new Soru("3 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
//     new Soru("4 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
//     new Soru("5 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
//     new Soru("6 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
//     new Soru("7 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
// ];
// console.log(sorular[2].sorMetni);


// // ya da bir döngü kurarak hepsnini otomatik olarak yazdırabiliriz.

// for(let s of sorular){
//     console.log(s.sorMetni);
//     console.log(s.dogruCevap);
// }
// // bu şekilde tüm sorularu ve cevapları ekrana yazdırmış olduk.



