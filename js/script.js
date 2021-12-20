

let radius = 240;
let autoRotate = true;
let rotateSpeed = -90;
let imgWidth = 120; 
let imgHeight = 170;






setTimeout(init, 100);

let obox = document.getElementById('drag-container');
let ospin = document.getElementById('spin-container');
let aImg = ospin.getElementsByTagName('img');
let aVid = ospin.getElementsByTagName('video');
let aEle = [...aImg, ...aVid];

let photo2 = document.getElementById('photo2');
let photo3 = document.getElementById('photo3');
let photo4 = document.getElementById('photo4');
let photo5 = document.getElementById('photo5');
let photo6 = document.getElementById('photo6');
let photo7 = document.getElementById('photo7');




//popup Presentation
let boutonConnexion = document.getElementById('boutonConnexion');
let formulaireConnexion = document.getElementById('formulaireConnexion');



boutonConnexion.addEventListener('click',openModalConnexion);
boutonConnexion.addEventListener("touchstart", openModalConnexion);

function openModalConnexion(){
  
    formulaireConnexion.style.display = 'flex';
    container.style.opacity = 0.5;
}
function closeModalConnexion(){
    formulaireConnexion.style.display = 'none';
    container.style.opacity = 1;
}

//popup Reservia
let boutonProfilReservia = document.getElementById('boutonProfilReservia')
let projetReservia = document.getElementById('projetReservia');

boutonProfilReservia.addEventListener('click',openModalReservia);
boutonProfilReservia.addEventListener("touchstart", openModalReservia);

function openModalReservia(){
  
  projetReservia.style.display = 'flex';
  container.style.opacity = 0.5;
}
function closeModalReservia(){
  projetReservia.style.display = 'none';
  container.style.opacity = 1;
}


//rotate none
let body = document.getElementById('body');

body.addEventListener('click',stopModal)
function stopModal(){
  rotateSpeed= false;
  autoRotate = false;
}







ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";


let ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (let i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {

  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
  
}

let sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;


if (autoRotate) {
  let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}





document.onpointerdown = function (e) {
  clearInterval(obox.timer);
  e = e || window.event;
  let sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    let nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(obox);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    obox.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(obox);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(obox.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  let d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
