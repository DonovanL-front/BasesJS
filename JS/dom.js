// Séllecteurs JS 

/* document.querySelector('h4').style.background = "yellow"

const h4HTMl = document.querySelector('h4');
console.log(h4HTMl);

h4HTMl.style.background = "yellow" */


//Click event : 

const questionContainer = document.querySelector('.click-event');
const response = document.querySelector('p');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');



//Toggle , add , remove 

questionContainer.classList.toggle('question-click'); 


questionContainer.addEventListener('click', () => { 
    questionContainer.style.background = "black"; 
});


// Vérification du click et de la réponse 

btn1.addEventListener("click", () => { 
    response.style.background = "green";
    response.classList.add('show-response')
});

btn2.addEventListener("click", () => { 
    response.classList.add('show-response');
    response.style.background = "red";

});


// Mouse Events :

//-------------------------

const mouseMove = document.querySelector('.mouseMove');

window.addEventListener('mousemove' , (e) => {
   mouseMove.style.left = e.pageX + "px" ; 
   mouseMove.style.top = e.pageY + "px" ; 
});



mouseMove.addEventListener('mousedown', () => { 
    mouseMove.style.transform = "scale(2) translate(-25%, -25%)" ; 
});
