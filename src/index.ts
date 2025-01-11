//typez avec les types primtif
const chaineCaracter: string = "chaine de caractére";
const nombre: number = 123;
const vraioufaut: boolean = true;

//typer avec les types non primitif

const objetObjet: object = { name: "oumar" };
const objetTab: object = [1, 2, 3];
const typeany: any = "n'importe quelle valeur";

// Les types array et tuple
// Les types array
/* Il y a deux syntaxes en typeScript pour typer les tableaux
   En Typscript un tableau est un tableau JavaScript contenant
   un nombre indéfini d'élément */
// Première possiblité:
// type[];

const listeNumber: number[] = [1, 2, 3, 4];
const listeAny: any[] = [23, "cinq", {}];

// Deuxième possibilité:
Array<number>;

// Les tuples
// Les tuples sont des tableaux avec un nombre prédéfinis d'éléments.
// Déclaration d'un type tuple
let x: [string, number];
x = ["salut", 3];

// le type enum, ce type n'existe pas en javascript, il provient de typescript

// Exemple d'enum de code status

enum statusCode {
  codeerreurclient = 404,
  codeerreurserveur = 500,
  codeok = 200,
}
