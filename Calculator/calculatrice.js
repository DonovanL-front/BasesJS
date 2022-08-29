const buttons = document.querySelectorAll('.btn');
let result = document.getElementById('result');

// Récupère l'event.target.id pour chaque bouton dans buttons  et l'attribue a résult en ajoutant les nombres au fur et a mesure des frappes 

buttons.forEach((btn) => { 
    btn.addEventListener('click' , (e) => { 

        result.textContent += e.target.id;
        console.log(e.target.id);
    });
});


equal.addEventListener('click', () => { 
    // Afficher le resutat dans result 
    
    result.textContent = eval(result.textContent) ;
})

clear.addEventListener('click' , () => { 
    result.textContent = "";
})







let total = 0 ; 



// Calculatrice en console 

/*
function addition(x) {
    total += x  
    return total;
}

function soustraction(x) {
    total -= x 
    return total;
}



function multiplication(x) {
    if (total === 0 ) {
        return (total = x); 
    } else { 
        total *= x ;
        return total;
    }
}



function division(x) {
    if (total === 0) { 
        return (total = x); 
    } else { 
        total /= x
        return total;
    }
}




function modulo(x) {
    total = x % y 
    return total;
}




function reset() { 
    return total = 0 ; 
} */ 