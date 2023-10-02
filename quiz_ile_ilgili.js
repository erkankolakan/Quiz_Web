
function Quiz(sorular){    //Quiz sınıfı oluşturduk sorular isminde bir parametre gelecek
    this.sorular = sorular;
    this.soruIndex = 0;    
    this.dogruSayisi = 0 ;
}

Quiz.prototype.soruGetir = function(){  //Quiz sınıfının prototype na fonksiyon ekledik 
    return this.sorular[this.soruIndex];
}
// k