// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
// Faire apparaitre l'image de la partie improvise
// Faire apparaitre la popup quand on est en bas du site
// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav            = document.querySelector('#navbar');
const imgLeft        = document.querySelector('#imgImprovise')
const popUp          = document.querySelector('#popup');
const closeBtn       = document.querySelector('#closeBtn');
let playOnce         = true;

window.addEventListener('scroll', () => {
  // Événement NavBar
  if (window.scrollY > 1) {
    nav.style.height=  50 + "px";
  } else {
    nav.style.height=  90 + "px";
  }
  // Événement imgImprovise 

  let scrollValue = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
  if (scrollValue > 0.45) {
    imgLeft.style.opacity = 1
    imgLeft.style.transform = "none";
  }

  // Méthode FS

  if (scrollValue === 1 && playOnce) {
    popUp.style.opacity = 1;
    popUp.style.transform = "none";
    playOnce = false;
  }

  closeBtn.addEventListener('click', () => {
    popUp.style.transform = 'translateX(800px)';
  });



  // Méthode Lass
// Si l'hauteur actuel + l'hauteur de la fênetre === hauteur de la page éxecute la condition
//   if (scrollValue === 1 ) {
//     popUp.style.opacity = 1;
//     popUp.style.transform = "none";
//   }
// });

// Événement btn

// closeBtn.addEventListener('click', () => {
//   popUp.style.transform = 'translateX(800px)';

// setTimeout(() => {
//   popUp.remove()
// }, 500);  
// });
});