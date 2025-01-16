'use strict';
console.log('Exos 1-4: Fonctions');

/**========================================================================
 *                           Bonjour
 *========================================================================**/
console.log('*** Bonjour ***');

/**
 * 1) Créer une fonction 'direBonjour' qui:
 * - prend un 'nom' en entrée
 * - renvoie une chaine de caractère de type Bonjour personnalisé (ex: Bonjour Romain).
 * 2) Utiliser cette fonction avec votre prénom en logguant son résultat
 */

const sayHello = (name) => `Bonjour ${name}`;
console.log(sayHello('Pierre'));

/**========================================================================
 *                           Somme
 *========================================================================**/
console.log('*** Somme ***');

/**
 * 1) Créer une fonction 'somme' qui:
 * - prend 2 nombres en arguments
 * - renvoie la somme des deux nombres.
 *
 * 2) Utiliser cette fonction sur deux nombres de votre choix
 */
const sum = (a, b) => a + b;
console.log(sum(1, 2));

/**========================================================================
 *                           Pourcentage
 *========================================================================**/
console.log('*** Pourcentage ***');

/**
 * 1) Créez une fonction "calculer" qui:
 * - prend un nombre en entrée
 * - renvoie ce nombre augmenté de 13%
 *
 * 2) Utilisez cette fonction sur un nombre de votre choix,
 * et afficher son résultat dans la console
 */

const calculer = (nombre) => nombre * 1.13;
console.log(calculer(1000));

/**
 * 3) Modifier la fonction "calculer" pour pouvoir choisir également le pourcentage appliqué
 */

const calculer2 = (nombre, pourcentage) => nombre * (1 + pourcentage / 100);
console.log(calculer2(1000, 25));

/**========================================================================
 *                           1000
 *========================================================================**/
console.log('*** 1000 ***');

/**
 * Créer une fonction qui:
 * - prend en arguments deux nombres entiers, min et max,
 * - renvoie la somme de tous les entiers entre ces 2 nombres (min et max inclus)
 * - utiliser une boucle for
 */

/**========================================================================
 *                           [Bonus] Limite
 *========================================================================**/
console.log('*** [Bonus] Limite ***');

/**
 * 1) Créer une fonction 'limit' qui:
 * - prend en entrée un nombre de départ
 * - divise ce nombre par 2 jusqu'à ce que le nombre soit plus petit que 1 / 1_000_000
 * - renvoie le nombre de fois où on a divisé.
 */

const limit = (nombre) => {
  let i = 0;
  while (nombre > 1 / 1000000) {
    nombre /= 2;
    i++;
  }
  return i;
}
console.log(limit(6));


/**
 * Dans la question précédente, la limite était 0, et la tolérance 1 / 1_000_000
 * 2) Modifier la fonction 'limit' pour pouvoir fournir en entrée:
 * - une limite
 * - une tolérance
 */

const limit2 = (nombre, lim, tol) => {
  let i = 0;
  let tolerance = 1 / tol
  while (Math.abs(nombre - lim) > tolerance) {
    nombre /= 2;
    i++;
  }
  return i;
}
console.log(limit2(6, 0, 1_000_000));
console.log(limit2(10, 2, 100));


/**
 * 3) Modifier la fonction "limit" pour faire la même chose sans aucune boucle.
 */

const limit3 = (nombre, limit, tol) => {
  const i = 0;
  const tolerance = 1 / tol;
  const difference = Math.abs(nombre - limit);
  return Math.ceil(Math.log2(difference / tolerance));
}

console.log(limit3(6, 0, 1_000_000));
console.log(limit3(10, 2, 100));

/**========================================================================
 *                           [Bonus] Say Hello
 *========================================================================**/
console.log('*** [Bonus] Say Hello ***');

const languages = ['fr', 'es', 'de', 'it', 'jp'];

/**
 * 1) Créer une fonction 'prepareHello' qui prend en entrée une langue 'lang' ('fr', 'it', 'es', 'de', ...)
 * et qui, en fonction de la langue, renvoie une fonction anonyme.
 * - la fonction anonyme doit prendre en entrée un 'name'
 * - la fonction anonyme doit renvoyer une string de type "Bonjour [name]"
 * - si on ne passe pas de langue, ou si la langue n'est pas reconnue, utiliser l'anglais par défaut
 * 2) Utiliser "prepareHello" pour créer plusieurs fonctions pour dire bonjour dans plusieurs langues
 * 3) Tester les fonctions créées
 */

const prepareHello = (lang) => {
  if (lang === 'fr') {
    return (name) => `Bonjour ${name}`;
  } else if (lang === 'it') {
    return (name) => `Ciao ${name}`;
  } else if (lang === 'es') {
    return (name) => `Hola ${name}`;
  } else if (lang === 'de') {
    return (name) => `Hallo ${name}`;
  } else {
    return (name) => `Hello ${name}`;
  }
};

const helloInItalian = prepareHello('it');
const helloInFrench = prepareHello('fr');
const helloInSpanish = prepareHello('es');
const helloInGerman = prepareHello('de');

console.log(helloInSpanish('Pierre'));


/**========================================================================
 *                           [Bonus++] Récursion
 *========================================================================**/
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 3, children: [] },
        { value: 4, children: [] }
      ]
    },
    {
      value: 5,
      children: [
        { value: 6, children: [] },
        { value: 7, children: [] }
      ]
    },
    {
      value: 8
    }
  ]
};

/**
 * 1) Créer une fonction sumTreeValues qui prend en entrée une structure comme la variable tree
 * et retourne le calcul de la somme des "values".
 * 2) Vérifiez le résultat :
 *  const totalSum = sumTreeValues(tree);
    console.log(totalSum === 36); // true
 */
