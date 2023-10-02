// fonksiyon atama
function UI() {
      this.btn_start = document.querySelector(".btn_start"),
      this.btn_replay = document.querySelector(".btn_replay"),
      this.btn_quit = document.querySelector(".btn_quit"),
      this.quiz_box = document.querySelector(".quiz_box"),
      this.next_btn = document.querySelector(".next_btn"),
      this.option_list = document.querySelector(".option_list"),
      this.score_box = document.querySelector(".score_box"),
      this.correctIcon =  '<div class="icon"><i class="fas fa-check"></i></div>',
      this.incorrectIcon =  '<div class="icon"><i class="fas fa-times"></i></div>',
      this.time_text = document.querySelector(".timer_text"),
      this.time_second = document.querySelector(".time_second"),
      this.time_line = document.querySelector(".time_line")
}

UI.prototype.soruGoster = function(soru){

    let question = `<span>${soru.sorMetni}</span>`;
    let options = '';
    for(let cevap in soru.cevapSecenekleri){
        options += 
        `
        <div class="option">
        <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
        </div>
        `;
    }
    
    document.querySelector(".question_text").innerHTML=question;
    this.option_list.innerHTML=options;
    
    const option = this.option_list.querySelectorAll(".option"); //option class ına sahip tüm class ları getir.

    for(let opt of option){
        opt.setAttribute("onclick" , "optionSelected(this)"); //opt yani gelen her şıkka onclikc diye özelliğini ekle. this demek de şık olarak gelen div html sinin kendini gönder demek.
    } 
    
    }
    UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru){
        let tag = `<span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>`
        // document.querySelector(".question_index").insertAdjacentHTML("beforeend" , tag);
    // eklemek için bu tagu kullanırsak surekli taglar arasına heni bir tag ekler ve istemeiğiöiz gibi bir sonuç alırız
    document.querySelector(".question_index").innerHTML=tag;
    }

    UI.prototype.scoreGoster = function(toplamSoru, dogruCevap){
        let tag = `Toplam ${toplamSoru} Sorudan ${dogruCevap} Doğrun Cevap Verdiniz`;
        document.querySelector(".score_box .score_text").innerHTML = tag;
    };
