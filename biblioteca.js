import { Library } from './Library.js';

const library = new Library();
console.log('Aici incepem a adauga carti si reviste in sistemul bibliotecii');
library.addBook("NumeleCartii", "Autorul", "SerialNo");
library.addBook("NumeleCartii", "Autorul", "SerialNo");
library.addMagazine("NumeleRevistei", "NumeleAutor", "SerialNo");
console.log("Au fost adaugate in sistem");
console.log("Afisarea lor");
console.log("Carti:");
library.printBooks();

