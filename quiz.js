// iskelet
const quiz = new Quiz(sorular); //Quiz sınıfına sorular dizisini gönderdik ve bunu quiz e atadık

const ui = new UI();

ui.btn_start.addEventListener("click", function(){
    ui.quiz_box.classList.add("active"); //butona basınca .quiz_box classının içinerisine bir tane daha active adında bir class ekliyor. 
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir()); //quiz üzerinden soruGetir fonksiyonuna ulaştık.
    ui.soruSayisiniGoster(quiz.soruIndex + 1 , quiz.sorular.length );
});

ui.next_btn.addEventListener("click", function(){
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex+=1;
        clearInterval(counter); //temizlemiz gerek ki işlmelerimiz, süre 0 dan başlasın
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir()); //quiz üzerinden soruGetir fonksiyonuna ulaştık.
        ui.soruSayisiniGoster(quiz.soruIndex + 1 , quiz.sorular.length ); //soru sırasını ve sayısını gösterir
        ui.next_btn.classList.remove("show")
    }
    else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.scoreGoster(quiz.sorular.length , quiz.dogruSayisi);
    };
})

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
//window objesi üzerinden sayfayı yeniden başlatır. tekrar yüklendiğinden dolayı da js css kodları en baştan başlar
});
ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex = 0;
    quiz.dogruSayisi = 0 ;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


// const option_list = document.querySelector(".option_list");
// const correctIcon =  '<div class="icon"><i class="fas fa-check"></i></div>';
// const incorrectIcon =  '<div class="icon"><i class="fas fa-times"></i></div>';


    function optionSelected(option) {
        clearInterval(counter);
        clearInterval(counterLine);
        let cevap = option.querySelector("span b").textContent;
        let soru = quiz.soruGetir();
        if (soru.cevabiKontrolEt(cevap)) {
            quiz.dogruSayisi++;
            option.classList.add("correct");
            option.insertAdjacentHTML("beforeend",ui.correctIcon);
        }
        else{
            option.classList.add("incorrect");
            option.insertAdjacentHTML("beforeend", ui.incorrectIcon );
        }
        for (let i = 0; i < ui.option_list.children.length; i++) {
            ui.option_list.children[i].classList.add("disabled")
//option_list şıkların kapsayıcısı o yüzden option_list.children şıkların hepsi demek anlamına gelir
        }
        ui.next_btn.classList.add("show")
    }

let counter;
    function startTimer(time){
        counter = setInterval(timer , 1000 )
        

        function timer(){
            ui.time_second.textContent = time;
            time--;
//etiket eklemek istemediğimiz için textContent kullanııyoruz, eğer etiket de eklemek istersek innerHTML kullanmamız gerekir. HTML sayfasında taglar arasında normalde 10 yazıyor ama biz bu işlemi yaptığımız zaman onu siler ve artık time değerini yazar.

        if (time<0) {
            clearInterval(counter);
            clearInterval(counterLine);
            ui.time_text.textContent = "Süre Bitti";

            let cevap = quiz.soruGetir().dogruCevap;
        
        for(option of ui.option_list.children){

            if (option.querySelector("span b").textContent == cevap) {
                option.classList.add("correct");
                option.insertAdjacentHTML("beforeend" , ui.correctIcon)
            }
            option.classList.add("disabled");
            ui.next_btn.classList.add("show");

        }
    }
}
};
    // JavaScript'te setInterval() fonksiyonu, belirli bir süre boyunca belirli bir fonksiyonu tekrar tekrar çağırmak için kullanılır. clearInterval() fonksiyonu ise setInterval() fonksiyonu tarafından oluşturulan zamanlayıcıyı durdurmak için kullanılır.

    // setInterval() fonksiyonu çağrılırken, geri çağırılacak olan fonksiyon (yani timer), belirtilen süre aralıklarında sürekli olarak çağrılacak ve bir zamanlayıcı nesnesi döndürülecektir. Bu zamanlayıcı nesnesi, clearInterval() fonksiyonu tarafından durdurulması gereken zamanlayıcıdır.
    
    // Yani, clearInterval() fonksiyonunu kullanarak zamanlayıcıyı durdurmak istediğinizde, setInterval() fonksiyonu tarafından döndürülen zamanlayıcı nesnesini,webdeki adresini parametre olarak belirtmeniz gerekir. Bu nesne, counter olarak adlandırılmıştır ve setInterval() fonksiyonu tarafından döndürülen zamanlayıcıyı temsil eder. Dolayısıyla clearInterval(counter) kodu, counter zamanlayıcısını durduracak ve tekrar eden işlemleri durduracaktı



let counterLine;
    function startTimerLine(){
        let line_width = 0;
        counterLine = setInterval(timer , 20);

        function timer (){
            line_width +=1;
            ui.time_line.style.width = line_width + "px" //!!!!!!!!!!
            if (line_width == 550) {
                clearInterval(counterLine)
            }
        }
    }


