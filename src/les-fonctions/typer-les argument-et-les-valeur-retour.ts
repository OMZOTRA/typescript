// Déclaration des fonctions
// Il n'y a pas de différence en typescript  sur la déclaration de fonctions: vous pouvez
// les déclarer de manière anonyme ou nommée.
const prenom: string = "oumar";
const nom: string = "Traore";
function mafunction() {
  console.log(prenom + " " + nom);
}

mafunction();

const maNewFunction = () => {
  console.log(nom + " " + prenom);
};

maNewFunction();

/*****************************************************************/

//Typer une fonction avant sa déclaration
//Il est possible de typer une fonction avant de la déclarer
// Syntaxe ():type return =>{}
let multiplier: (nb1: number, nb2: number) => number;

multiplier = (a: number, b: number): number => {
  return a * b;
};

console.log(multiplier(12, 4));

/*****************************************************************/
// Les paramétres par Optionnelse
// -----------------------------
// En Typescript, pour définir des paramètres comme étant optionnel,
//  if suffit d'ajouter un ? après chaque paramètre optionnel.
// Les paramètres optionnels doivent toujours etre ajoutés après
//  les paramètres obligatoires.
let addition: (nbr1: number, nbr2?: number) => number;

addition = (x: number, y?: number): number => {
  return y ? x + y : x;
};

console.log(addition(5, 4));

/*************************************************************/
// Paramètres par défaut et rest

// Les paramètres par défaut

function soustraction(nb1: number = 20, nb2: number): number {
  return nb1 - nb2;
}

console.log(soustraction(undefined, 10));

// Utilisation d'un rest
// En typescript si vous utiliseze l'opération rest(...) comme dernier paramètre d'une
// fonction, vous pourrez le typer.

function ajouter(x: number, ...nbrs: number[]): number {
  return nbrs.reduce((acc, i) => acc + i, x);
}

// function ajouter(x: number, ...nbrs: number[]): number {
//   return nbrs.reduce((acc, i) => {
//     acc += i;
//     return acc;
//   }, x);
// }
console.log(ajouter(1, 2, 3, 4));

/***********************************************************************/
// La surcharge de fonction

function maFonction(param: string): string;
function maFonction(param: number): number;
function maFonction(param: boolean): boolean;
function maFonction(param: any): any {
  return param;
}

maFonction("test").toLocaleLowerCase();
maFonction(42).toFixed();

// Exemple avancé de surcharge

interface User {
  id: number;
  email: string;
  nom: string;
  prenom: string;
}

function getUser(id: number): User;
function getUser(email: string): User;
function getUser(firstName: string, lastName?: string): User;
function getUser(param1: string | number, param2?: string): User {
  let user: User;
  user = {
    id: 1,
    email: "king@yatass.fr",
    nom: "philipe",
    prenom: "margo",
  };
  if (typeof param1 === "number") {
    // récupère le user par son id
  } else if (typeof param2 != "undefined") {
    // récupère le user par son nom et prénom
  } else {
    // récupère le user par son email
  }
  return user;
}
