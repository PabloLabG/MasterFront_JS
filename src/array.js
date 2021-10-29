//1. Array operations
//Head
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y
//devuelva su primer elemento. Utiliza destructuring.
const myArray = [1, 2, 3, 4, 5];

const head = (array) => {
  const [primerElemento] = array;
  return primerElemento;
};
console.log(head(myArray));

//Tail
//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta
//todos menos el primer elemento. Utiliza rest operator.
const tail = (array) => {
  const [, ...segundoElemento] = array;
  return segundoElemento;
};
console.log(tail(myArray));

//Init
//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva
//todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = (array) => array.splice(0, array.length - 1);
console.log(init(myArray));

//Last
//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva
//el último elemento.
const last = (array) => array.splice(array.length - 1);
console.log(last(myArray));

//2. Concat
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
//devuelva la concatenación de ambos. Utiliza rest / spread operators.
const myArrayA = [1, 2, 3, 4, 5];
const myArrayB = [6, 7, 8, 9, 10];

const concat = (a, b) => (newArray = [...a, ...b]);
console.log(concat(myArrayA, myArrayB));

//Opcional
//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
const concatMultiple = (...a) => [].concat(...a);
console.log(
  concatMultiple(
    myArrayA,
    myArrayB,
    myArrayA,
    myArrayB,
    myArrayA,
    myArrayB,
    myArrayA,
    myArrayB
  )
);
