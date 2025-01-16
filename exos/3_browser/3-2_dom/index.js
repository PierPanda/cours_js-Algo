'use strict';
console.log('Exos 3-2: DOM');

/**========================================================================
 *                           Chirugie
 *========================================================================**/
console.log('*** Chirurgie ***');


//  * 1) Changez le texte et la couleur du background de l'élément avec l'id 'coucou'
const coucou = document.getElementById('coucou')
coucou.textContent = "HELLO"
coucou.style.backgroundColor = 'green'
coucou.style.padding = '10px'

//  * 2) Comptez les éléments de type 'i'
const allI = document.querySelectorAll('i')
console.log(allI.length)

//  * 3) Comptez les 'i' gris, bleus, et rouge
const greyDot = document.querySelectorAll('i:not(.blue):not(.red');
const blueDot = document.querySelectorAll('.blue');
const redDot = document.querySelectorAll('.red');
console.log(greyDot.length, blueDot.length, redDot.length);

//  * 4) Supprimez les éléments avec la classe 'inutile', ainsi que les i bleus et rouge
const inutile = document.getElementsByClassName('inutile');
const blue = document.getElementsByClassName('blue');
const red = document.getElementsByClassName('red');

[...inutile, ...blue, ...red].forEach((e) => {
  e.remove();
})


//  * 5) Créez un élément de type 'p', avec:
//  * - votre ville en textContent
//  * - la classe 'blue'
//  * - ajoutez cet élément en dernier enfant du footer
const newP = document.createElement('p');
const footer = document.getElementsByTagName('footer')[0];
newP.textContent = "Bordeaux ma ville";
newP.classList.add('blue');
newP.style.color = 'white';
footer.appendChild(newP);

//  * 6) Créez un élément de type 'h3', avec:
//  * - 'Infos' en textContent
//  * - la classe 'red'
//  * - ajoutez cet élément en premier enfant du footer
const info = document.createElement('h3');
info.textContent = 'Informations';
info.classList.add('red');
info.style.color = 'white';
footer.prepend(info);

//  * Bonus) Créez 15 éléments de type 'div', avec la classe 'numero'.
//  * - Ajoutez en textContent de ces éléments leur numero (entre 1 et 15) et ajoutez les à la 2e section




/**========================================================================
 *                           [BONUS] Article
 *========================================================================**/
console.log('*** [BONUS] Article ***');

/**
 * 1) Déplacer l'article dans la 1ère section
 * 2) Reproduire programmatiquement l'élément d'article, et l'ajouter à la 2e section
 */
