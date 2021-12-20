//Profil
//renvoi text sur autre id
let textProfilNom = document.getElementById('textProfilNom');
let receptionNom = document.getElementById('receptionNom');
let textProfilInteret = document.getElementById('textProfilInteret');
let textProfilRecherche = document.getElementById('textProfilRecherche');




textProfilNom.addEventListener('input',()=>{
    receptionNom.innerHTML= textProfilNom.value
    console.log(textProfilNom.value)
})

textProfilInteret.addEventListener('input',()=>{
    receptionInteret.innerHTML= textProfilInteret.value
    console.log(textProfilInteret.value)
})

textProfilRecherche.addEventListener('input',()=>{
    receptionRecherche.innerHTML= textProfilRecherche.value
    console.log(textProfilRecherche.value)
})

//Carousel

// var angle = 0; 
// function carrousel(sign){

//     spinner=document.querySelector(".carrousel");
    
//     if(!sign){angle = angle + 60}
//     else{ 
    
//     angle = angle - 60
    
//     }
    
//     spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")
// }	

$('section.awSlider .carousel').carousel({
    pause: "hover",
    interval: 2000
  });
  
  var startImage = $('section.awSlider .item.active > img').attr('src');
  $('section.awSlider').append('<img src="' + startImage + '">');
  
  $('section.awSlider .carousel').on('slid.bs.carousel', function () {
   var bscn = $(this).find('.item.active > img').attr('src');
    $('section.awSlider > img').attr('src',bscn);
  });
  
  
    
    