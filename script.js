// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav            = document.querySelector('#navbar');
const imgLeft        = document.querySelector('#imgImprovise')
const popUp          = document.querySelector('#popup');
const closeBtn       = document.querySelector('#closeBtn');

window.addEventListener('scroll', () => {
  // Événement NavBar
  if (window.scrollY > 1) {
    nav.style.height=  50 + "px";
  } else {
    nav.style.height=  90 + "px";
  }
// Événement imgImprovise 
  if (window.scrollY >= 244) {
    imgLeft.style.opacity = 1
    imgLeft.style.transform = "translateX(0px)";
  }

// Si l'hauteur actuel + l'hauteur de la fênetre === hauteur de la page éxecute la condition
  if (window.scrollY + window.innerHeight === document.body.scrollHeight ) {
    popUp.style.opacity = 1;
    popUp.style.transform = "translateX(0)";
  }
});

// Événement btn
closeBtn.addEventListener('click', () => {
  popUp.style.transform = ('translateX(800px)')

setTimeout(() => {
  popUp.remove()
}, 2000);  
});