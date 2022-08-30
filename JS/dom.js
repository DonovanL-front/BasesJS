// Séllecteurs JS

/* document.querySelector('h4').style.background = "yellow"

const h4HTMl = document.querySelector('h4');
console.log(h4HTMl);

h4HTMl.style.background = "yellow" */

//Click event :

const questionContainer = document.querySelector(".click-event");
const response = document.querySelector("p");
const btn2 = document.getElementById("btn-2");
const btn1 = document.getElementById("btn-1");

//Toggle , add , remove

questionContainer.classList.toggle("question-click");

questionContainer.addEventListener("click", () => {
  console.log("questionContainer");
  questionContainer.style.background = "black";
});

// Vérification du click et affichage de la réponse

btn1.addEventListener("click", () => {
  console.log("click");
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// Mouse Events :

//-------------------------

const mouseMove = document.querySelector(".mouseMove");

//Récupère la position  X et Y de la souris sur la page et attribue la position a la const mouseMove
window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

// Récupère l'event du clic gauche pour auguementer la taille de mouseMove
window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

// Récupère l'event du clic gauche pour diminuer la taille de mouseMove

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMove.style.border = "2px solid teal";
});

// Récupère l'event du survol d'un élément
questionContainer.addEventListener("mouseover", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6";
});
// Récupère l'event de la sortie de la souris d'un élément
questionContainer.addEventListener("mouseout", () => {
  console.log("mouseOut");
  questionContainer.style.background = "pink";
});

// Affiche la réponse en fonction de la réponse cliquée

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//--------------------------------------------

// KeyPress event --

const KeyPressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

//Fonction pour faire sonner la sonette ;
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  //Changement de couleur de la const KeyPressContainer
  key.textContent = e.key;
  if (e.key === "j") {
    KeyPressContainer.style.background = "pink";
  } else if (e.key === "k") {
    KeyPressContainer.style.background = "red";
  } else {
    KeyPressContainer.style.background = "blue";
  }

  //Si touche 6 tapée joue une sonerie .mp3
  if (e.key === "6") ring(e.key);
});

//--------------------------------------
// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  //console.log("scroll");
  //console.log(window.scrollY);

  //Affichage de la navbar

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else if (window.scrollY < 120) {
    nav.style.top = "-50px";
  }
});

//---------------------------------

//Form events

const inputName = document.querySelector('input[type= "text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

//Récupérer ce qui est tapé dans input et l'afficher en console
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  //console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  //Empèche l'evenement de disparaitre en rechargeant la page a l'envoi du formulaire
  e.preventDefault();
  console.log("Submit");

  //console.log(cgv.checked);

  if (cgv.checked) {
    // Affiche le contenu des variables dans la balise div du form
    document.querySelector("form > div").innerHTML = `
        <h3> Pseudo : ${pseudo}</h3>
        <h4> Language préféré : ${language}</h4>
        `;
  } else {
    // Veuillez accepter les CGV
    alert("Veuillez accepter les CGV");
  }
});

//-------------------------

//Load event

window.addEventListener("load", () => {
  console.log("Document chargé !");
});

//--------------------------

// Récupérer tous les items identiques
//  forEaCh

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

//------------------------------------

// AddEventListener vs Onclick

/*
document.body.onclick = () => { 
    console.log('click!!!!'); 
}


document.body.onscroll = () => { 
    console.log("Scroll");
}*/

//Bubbling => fin (de base l'event listener est paramétré en mode bubbling)

document.body.addEventListener(
  "click",
  () => {
    console.log("click");
  },
  false
);

// Usecapture

document.body.addEventListener(
  "click",
  () => {
    console.log("click2");
  },
  true
);

//----------------------------------------------

// Stop propagation

/*questionContainer.addEventListener("click", (e) => {
  alert("test");
  e.stopPropagation();
});*/




// RemoveEventListener

///--------------------------------------


// Le BOM 


// Evenements addossés a window


//alert("Coucou")
btn2.addEventListener('click', () => { 
    confirm("Voulez vous vraiment vous tromper? ")
})

btn1.addEventListener('click' , () => { 
   let answer =  prompt('Entrez votre nom')
   console.log(answer);

   questionContainer.innerHTML = "<h3> Bravo : " + answer + "</h3>"
})

// SetTimeout()
setTimeout(() => { 
    // logique a éxécuter
    questionContainer.style.borderRadius = "300px";

},1000)

// setInterval()


// let interval = setInterval(() => { 
//     document.body.innerHTML += `"<div class='box'>
//     <h2>Nouvelle boite !</h2>
//     </div>`
// }, 1000)


// document.body.addEventListener('click' , (e) => {
//     console.log(e.target); 
//     e.target.remove();
//     clearInterval(interval);
// })
// window.open('http://google.com', 'cours js' , 'height=600', 'width=900')

// Objet Location 


// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace("http://lequipe.fr")

// window.onload = () => { 
//     location.href = "http://lequipe.fr"
// };

//Navigator

// Récupérer la position d'un appareil 

// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log('Votre position actuelle est :');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude : ${crd.longitude}`);
//     console.log(`La précision est de ${crd.accuracy} mètres.`);
//   }
  
//   function error(err) {
//     console.warn(`ERREUR (${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);

  

// console.log(navigator.userAgent);
// console.log(navigator.geolocation.watchPosition);



// History 

// history ; 
// window.history.back(); 
// history.go(-2) ; 



// Récupérer un after CSS*

window.addEventListener('mousemove', (e) => { 
    console.log(e)
    nav.style.setProperty('--x', e.layerX + "px")
    nav.style.setProperty('--y', e.layerY + "px")
})