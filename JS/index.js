/* Variable  */

let unTexte = "voici un texte "

console.log(unTexte)

/* Concaténation */

let texteA = "Baptiste"
let texteB = "Coucou " + texteA

console.log(texteB)

/* Avec backtics alt 7 */
let  chiffre = 24; 
let temp = `La température attendue est ${chiffre}` 

console.log(temp)

/*Les opérateurs  */

console.log( 4 * 5)
console.log( 4 - 5)
console.log( 4 + 5)
console.log( 4 % 5)
console.log( 4 / 5)
console.log( 4 ** 5)
console.log( 4 > 5)
console.log( 4 < 5)


/* Les structures de controle */

let x = 5 
let y = 4

/* Supérioritéé */

if(x > y ) {
     console.log('Supérieur')
} else { 
    console.log('Inférieur')
}

/* Egalité parfaite , ou || */

if (x === y || x > 3 ) { 
    console.log('True !!');
} else { 
    console.log('false');
}

/* Egalité parfaite , et  */


if (x === y && x > 3 ) { 
    console.log('True !!');
} else { 
    console.log('false');
}


if (x) { 
    console.log('Exist')
}