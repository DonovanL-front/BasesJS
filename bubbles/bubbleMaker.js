const counterDisplay = document.querySelector('h3');
let counter = 0 ; 



// Fonction fléchée permettant de créer la logique d'une bulle

const bubbleMaker = () => {

  // Création d'une span et implémentation html
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);

  // ajout de la classe CSS bubble
  bubble.classList.add("bubble");

  // Math.random pour randomiser la taille des bulles
  let size = Math.random() * 200 + 100 + "px";

  // Assigne a la bulle une taile aléatoire et une position aléatoire également
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // Pour que les bulles partent autant de la droite que de la gauche il faut apporter une valeur aléatoire négative ou positive a left testé par la condition ternaire dessous
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  // Ajoute la valeur a la variable left aléatoirement entre 100 et -100 % grace a plusMinus
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");


//  Récupère le click de la souris sur une bulle et supprime cette bulle en retour 

  bubble.addEventListener("click", () => {
      counter++ ;
      counterDisplay.textContent = counter
    bubble.remove();
  });

// Supprime une bulle toutes les 8s
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 500);
