// ana script
function Soru(sorMetni, cevapSecenekleri , dogruCevap){
    this.sorMetni = sorMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;                                                   
}

Soru.prototype.cevaiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let soru1 = new Soru("Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Nuget" , c:"Npm"} , "b");

let sorular = [
    new Soru("1 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
    new Soru("2 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
    new Soru("3 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
    new Soru("4 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
    new Soru("5 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
    new Soru("6 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
    new Soru("7 - Hangisi js paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typecsrip" , c:"Npm"} , "c"),
];

// ve içeride kendi oluşturacağı alana yani sorular proporty sine dışarıdan göndereceğimiz sorular bilgisi atanacak.


function Quiz(sorular){    //Quiz sınıfı oluşturduk sorular isminde bir parametre gelecek
    this.sorular = sorular;
    this.soruIndex = 0;    
}

Quiz.prototype.soruGetir = function(){  //Quiz sınıfının prototype na fonksiyon ekledik 
    return this.sorular[this.soruIndex];
}
const quiz = new Quiz(sorular); //Quiz sınıfına sorular dizisini gönderdik ve bunu quiz e atadık


document.querySelector(".btn-start").addEventListener("click", function(){
    if (quiz.sorular.length != quiz.soruIndex) {
        console.log(quiz.soruGetir()); //quiz üzerinden soruGetir parametresine ulaştık.
        quiz.soruIndex+=1;
    }
    else{
        console.log("Başka Soru Bulunmamkta");
    };
});