// sorular
function Soru(sorMetni, cevapSecenekleri , dogruCevap){
    this.sorMetni = sorMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;                                                   
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}
let sorular = [
    new Soru("1) “Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir?" , {a:"Reşat Nuri Güntekin" , b:"Halide Edip Adıvar" , c:"Ziya Gökalp", d:"Ömer Seyfettin"} , "b"),
    new Soru("2) Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir?" , {a:"Hititler" , b:"Elamlar" , c:"Sümerler" ,d:"Urartular"} , "c"),
    new Soru("3) Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir?" , {a:"Endonezya " , b:"Srilanka  " , c:"Tayland  " ,d:"Hindistan"} , "a"),
    new Soru("4) 2003 Yılında Euro Vizyon Şarkı Yarışmasında Ülkemizi Temsil Eden ve Yarışmada Birinci Gelen Sanatçımız Kimdir?" , {a:"Grup Athena" , b:"Sertap Erener " , c:"Şebnem Paker ", d:"Ajda Pekkan"} , "b"),
    new Soru("5) Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir?" , {a:"Bursa" , b:"Ankara" , c:"İstanbul ", d:"Gaziantep"} , "d"),
    new Soru("6) Aşağıdakilerden Hangisi Dünya Sağlık Örgütünün Kısaltılmış İsmidir?" , {a:"Uhw" , b:"Unıcef" , c:"Who", d:"Nato"} , "c"),
    new Soru("7) Romen Rakamında Hangi Sayı Yoktur?" , {a:"0" , b:"50" , c:"100", d:"1000"} , "a"),
    new Soru("8) Bir Gün Kaç Saniyedir?" , {a:"86000" , b:"88600 " , c:"86400 ", d:"84800"} , "c"),
    new Soru("9) Üç Büyük Dince Kutsal Sayılan Şehir Hangisidir?" , {a:"Mekke " , b:"Kudüs" , c:"Roma ", d:"İstanbul"} , "b"),
    new Soru("10) Hangi İlimizde Demiryolu Yoktur?" , {a:"Batman " , b:"Kütahya " , c:"Aydın ", d:"Muğla"} , "d"),
    new Soru("11) Hangi Ülkenin İki Tane Başkenti Vardır?" , {a:"Güney Afrika" , b:"Senegal " , c:"El Salvador", d:"Venezuela "} , "a"),
    new Soru("12) Bir Sebepten Dolayı Tek Kulağına Küpe Takan Osmanlı Padişahı Kimdir?" , {a:"Kanuni Sultan Süleyman" , b:"Yavuz Sultan Selim" , c:"Orhan Bey", d:"Fatih Sultan Selim "} , "b"),
    new Soru("13) Aspirinin Hammaddesi Nedir?" , {a:"Söğüt " , b:"Köknar " , c:"Kavak ", d:"Meşe "} , "a"),
    new Soru("14)Aşağıdaki Ülkelerden Hangisinin Nüfusu Daha Fazladır?" , {a:"İspanya" , b:"Fransa  " , c:"İngiltere  ", d:"Almanya  "} , "d"),
    new Soru("15) Mona Lisa tablosu hangi ünlü sanatçı tarafından yapılmıştır?" , {a:"Leonardo da Vinci " , b:"Michelangelo " , c:"Vincent van Gogh ", d:"Pablo Picasso "} , "a"),
    new Soru("16) İlk Nobel Ödülü hangi kategoride verilmiştir?" , {a:"Fizik " , b:"Kimya " , c:"Tıp ", d:"Edebiyat "} , "d"),
    new Soru("17) Dünya'nın nabzını tutan gazete sloganıyla tanınan gazete hangisidir?" , {a:"New York Times " , b:"The Guardian " , c:"Le Monde ", d:"Financial Times "} , "a"),
    new Soru("18) Tarihte, hangi yıl İstanbul'un fethi gerçekleşmiştir?" , {a:"1453 " , b:"1520 " , c:"1620 ", d:"1750 "} , "a"),
    new Soru("19) Amerika Birleşik Devletleri'nin başkenti hangi şehirdedir?" , {a:"Washington D.C. " , b:"New York" , c:"Los Angeles ", d:"Chicago "} , "a"),
    new Soru("20)Eski Mısır'da hangi tanrı tapınılmazdı?" , {a:"Ra" , b:"Anubis  " , c:"Horus  ", d:"Hades  "} , "d"),
    new Soru("21)İnsanlarda en çok hangi kan grubu bulunur?" , {a:"A" , b:"B  " , c:"AB", d:"O  "} , "d"),
];
