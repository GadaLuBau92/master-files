document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector("body");
  const swalst = Swal.mixin({timer: 2300, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90,}); 
  audio = new Audio('' + linkmp3.src); 
  ftganti=0; fungsi=0; fungsiAwal=0; deffotostiker=fotostiker.src;
  
  function berjatuhan() {
    const heart = document.createElement("div"); 
    heart.className = "fas fa-snowflake"; 
    heart.style.left = (Math.random() * 90)+"vw"; 
    heart.style.animationDuration = (Math.random()*3)+2+"s"; 
    body.appendChild(heart);
  } 
  
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-snowflake"); 
    if (heartArr.length > 100) {heartArr[0].remove()}
  }, 100);
  
  Content.style = "opacity:1;margin-top:16vh"; 
  const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageHeight: 80,}); 
  
  document.getElementById("kadoIn").onclick = function() {
    if(fungsiAwal==0){
      audio.play();
      fungsiAwal=1;
      kadoIn.style="transition:all .8s ease;transform:scale(10);opacity:0";
      wallpaper.style="transform: scale(1.5);";
      ket.style="display:none";
      setTimeout(initengahan,300);
      setTimeout(inipesan,500);
    }
  }
  
  window.inipesan = async function() {
    var { value: nama } = await swals.fire({
           title: 'Masukin Nama Kamu', input: 'text',
    });
    if(nama && nama.length < 11){
         window.nama = nama;
         vketikhalo="Hai, " + nama + " ✨";
         mulainama();
    } else {
         await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');
         inipesan();
    }
  }

  window.initengahan = function() {
    kadoIn.style="display:none";
    ket.style="display:none";
    Content.style = "opacity:1;margin-top:0";
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1.5);";
  }
  
  window.mulainama = async function() {
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1);";
    fotostiker.style="display:inline-flex;";
    setTimeout(ftmuncul,200);
    setTimeout(kethalo,500);
  }
  
  window.ftmuncul = function(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti==5){fotostiker.src = fotostiker5.src;}
    
    fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";
  }
  window.fthilang = function(){fotostiker.style="display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";}
  window.jjfoto = function(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  window.bqmuncul = function(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();}
  window.bqhilang = function(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  window.kethalo = function(){new TypeIt("#halo", {strings: ["" + vketikhalo], startDelay: 50, speed: 40, waitUntilVisible: true, afterComplete: function(){halo.innerHTML = vketikhalo;setTimeout(bqmuncul,200);},}).go();}

  window.tombol = function(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";if(fungsi==2){By.innerHTML="&#128140; Balas"}}
  document.getElementById("By").onclick = function() {if(fungsi==1){Tombol.style="";fthilang();fungsi=0;pertanyaan();} if(fungsi==2){Tombol.style="";menuju();}}
  
  const waktuSekarang = new Date().getHours();let ucapan;
  if(waktuSekarang < 10){ucapan = "Selamat Pagi, ";} 
  else if(waktuSekarang < 16){ucapan = "Selamat Siang, ";}
  else if(waktuSekarang < 19){ucapan = "Selamat Sore, ";}
  else{ucapan = "Selamat Malam, ";}

  window.vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  window.mulaiketik1 = function(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 400, speed: 20, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    aktiopsL();
  },}).go();
  }
  
  window.opsLclick=0; window.opsLcheck=0; window.defopsL=opsL.innerHTML;
  document.getElementById("bq").onclick = function() {
    if(opsLclick==1){
      if(opsLcheck==1){setTimeout(aktipesan1,400);fthilang();ftganti=1;setTimeout(ftmuncul,300);}
      if(opsLcheck==2){mulaiketik3();}
      if(opsLcheck==3){mulaiketik4();}
      if(opsLcheck==4){mulaiketik5();}
      if(opsLcheck==5){kethalo2();}
      otomatis();opsL.style.opacity="0";opsLclick=0;
    }
  }
  window.aktiopsL = function(){opsL.innerHTML=defopsL;opsL.style.opacity=".8";opsLclick=1;opsLcheck+=1;}
  window.gantiopsL = function(){opsL.innerHTML="[ Klik beberapa Toga-nya ]";opsL.style.opacity=".8";}
  window.otomatis = function(){pesan3.style="transition:none";pesan8.style="display:none";kalimat.style="opacity:0";if(otoaktipesan==0){setTimeout(otolanj,400)}}
  window.otolanj = function(){kalimat.style="opacity:1";}

  window.aktipesan1 = function(){kalimat.innerHTML=pesan1.innerHTML;kolombaru.style="position:relative;opacity:1;transform:scale(1);";}
  window.vketik2=pesan2.innerHTML;
  window.aktipesan2 = function(){
  wallpaper.style="transform: scale(1.5);";
  kolombaru.style="";kalimat.innerHTML="";
  new TypeIt("#kalimat", {
  strings: ["" + vketik2], startDelay: 20, speed: 40, cursor: true, deleteSpeed: 50, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    setTimeout(aktipesan3,500);
  },}).go();
  }
  window.vketik3=pesan3.innerHTML;pesan3.innerHTML="";
  window.aktipesan3 = function(){
  kalimat.style="display:none";
  pesan3.style="position:relative;opacity:1;transform: scale(1)";
  wallpaper.style="transform: scale(1)";
  fthilang();ftganti=2;setTimeout(ftmuncul,300);
  new TypeIt("#pesan3", {
  strings: ["" + vketik3], startDelay: 1, speed: 45, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan3.innerHTML=vketik3;setTimeout(otomatis,600);setTimeout(aktipesan4,1010);
  },}).go();
  }
  window.aktipesan4 = function(){
    wallpaper.style="transform: scale(1.5);";kalimat.innerHTML=pesan4.innerHTML + nama + " 🥳";kalimat.style="transform:scale(1.2)";setTimeout(aktipesan5,1000);
  }
  window.vketik5=pesan5.innerHTML;pesan5.innerHTML="";
  window.aktipesan5 = function(){
  fthilang();ftganti=3;setTimeout(ftmuncul,300);
  wallpaper.style="transform: scale(1);";
  new TypeIt("#pesan5", {
  strings: ["" + vketik5], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan5.innerHTML=vketik5 + " ><";setTimeout(aktipesan6,800);
  },}).go();
  }
  window.vketik6=pesan6.innerHTML;pesan6.innerHTML="";
  window.aktipesan6 = function(){
  wallpaper.style="transform: scale(1.5);";
  new TypeIt("#pesan6", {
  strings: ["" + vketik6], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan6.innerHTML=vketik6;setTimeout(aktipesan7,800);
  },}).go();
  }
  window.vketik7=pesan7.innerHTML;pesan7.innerHTML="";
  window.aktipesan7 = function(){
  fthilang();ftganti=1;setTimeout(ftmuncul,300);
  wallpaper.style="transform: scale(1);";
  new TypeIt("#pesan7", {
  strings: ["" + vketik7], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan7.innerHTML=vketik7;fungsi=1;setTimeout(tombol,400);
  },}).go();
  }
  
  window.vketik81=pesan8.innerHTML;pesan8.innerHTML="";
  window.vketik9=pesan9.innerHTML;pesan9.innerHTML="";
  window.vketik10=pesan10.innerHTML;pesan10.innerHTML="";
  window.aktipesan8 = function(){
  pesan5.style="display:none";pesan6.style="display:none";pesan7.style="display:none";pesan8.style="";
  wallpaper.style="transform: scale(1);";
  ftganti=4;ftmuncul();
  new TypeIt("#pesan8", {
  strings: ["" + vketik8, "" + vketik9], startDelay: 20, speed: 45, cursor: true, deleteSpeed: 30, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan8.innerHTML=vketik9;setTimeout(otomatis,1300);setTimeout(aktipesan10,1710);
  },}).go();
  }
  window.aktipesan10 = function(){
    wallpaper.style="transform: scale(1.5);";
    fthilang();ftganti=5;setTimeout(ftmuncul,300);
    otoaktipesan=1;otomatis();setTimeout(toaktipesan,300);
    setInterval(berjatuhan,400);
    fungsi=2;setTimeout(tombol,2000);
  }
  var otoaktipesan=0;
  window.toaktipesan = function(){kalimat.innerHTML=vketik10;kalimat.style="transform:scale(1);font-size:24px;font-family:var(--gaya-font2)";}

  document.getElementById("lv1").onclick = function() {lv1.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv2").onclick = function() {lv2.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv3").onclick = function() {lv3.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv4").onclick = function() {lv4.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  var slov=0; window.checkslov = function() {if(slov==4){kolombaru.style="position:relative;transform:scale(1)";otomatis();setTimeout(aktipesan2,400);}}
  
  window.pertanyaan = async function(){
    var { isConfirmed: prtanya } = await swals.fire({
      title: nama + ' ' + tanya, 
      text: '' + opstanya, 
      imageUrl: '' + fotostiker6.src, 
      showCancelButton: true, 
      confirmButtonText: '' + tompositif, 
      cancelButtonText: ''+ tomnegatif,
    });
    if(prtanya){
      await swalst.fire({title: '' + katatambahan.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
      vketik8=vketik81;aktipesan8();
    } else {
	  await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
      vketik8="";aktipesan8();
    }
  }
  
  var tanya = 'Mau Traktiran Gak Nih? 😶❤️';
  var opstanya = 'Ayo jawab 😆';
  var tompositif = 'Mau';
  var tomnegatif = 'Engga';
    
  window.menuju = async function(){
    pesanwhatsapp = "Makasii udah ngucapin sidang " + nama + " ><";
    await swals.fire('OK!', 'Kirim jawabannya ke WhatsApp aku, ya!', 'success');
    window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;
  }

  // Watermark buatan kamu sendiri di pojok kanan bawah
  const watermark = document.createElement('div');
  watermark.innerHTML = "Created by Azhar 🚀";
  watermark.style = "position: fixed; bottom: 10px; right: 10px; font-size: 11px; color: white; opacity: 0.6; z-index: 9999; font-family: sans-serif;";
  document.body.appendChild(watermark);
});
