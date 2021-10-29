//3. Clone Merge
//Clone
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un
//nuevo objeto con las propiedades de source:
const mySource = {
  id: "1",
  name: "Usuario",
  years: 34,
};

const clone = (source) => ({ ...source });
const copySource = clone(mySource);

console.log({ mySource });
console.log({ copySource });

//Merge
//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un
//nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades
//con el mismo nombre, source sobreescribe a target.

//Por ejemplo, dados estos 2 objetos:

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
//el resultado de mezclar a sobre b sería:

//merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
//TIP: Puedes usar la función "clone" del apartado A.

function merge(source, target) {
  // const copySourceObj = clone(source);
  // let mergeObject = { ...source, ...target };
  // mergeObject = { mergeObject, ...copySourceObj };

  // con esto evitariamos tener que usar la funcion de clone
  let mergeObject = { ...target, ...source };

  console.log({ mergeObject });
}

merge(a, b);

//4. Read Books
//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído
//o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de
//no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar
//según un patrón.

function isBookRead(books, titleToSearch) {
  let _myBook = books.find((book) => book.title === titleToSearch);
  return !!_myBook && _myBook.isRead;
}
//Ejemplo
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
//Opcional
//Utiliza Typescript para añadir los tipos adecuados.

//5. Slot Machine
//El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez
//que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de
//monedas que automáticamente se irá incrementando conforme vayamos jugando.

//Cuando se llame al método play el número de monedas se debe incrementar de forma automática y
//debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario
//habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola
//el mensaje:

//"Congratulations!!!. You won <número de monedas> coins!!";
//y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso
//contrario deberá mostrar otro mensaje:

//"Good luck next time!!".
//Ejemplo de uso
class SlothMachine {
  constructor(moneda = 0) {
    this._contMoneda = moneda;
  }

  play() {
    let _message = "Good luck next time!!";
    let _playGame = [];
    this._contMoneda++;

    for (let index = 1; index <= 3; index++) {
      _playGame.push(this._randomBoolean());
    }

    if (_playGame.every((tirada) => tirada === true)) {
      _message = `Congratulations!!!. You won ${this._contMoneda} coins!!`;
      this._contMoneda = 0;
    }

    return _message;
  }

  // function random 0 / 1
  _randomBoolean() {
    return Boolean(Math.round(Math.random()));
  }
}

const machine1 = new SlothMachine();
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Congratulations!!!. You won 3 coins!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Congratulations!!!. You won 2 coins!!"
