var stringaOriginale = "Esercitazione JavaScript";

console.log('Lunghezza della stringa: ' + stringaOriginale.length);

// creo le stringhe maiuscole e minuscole
var stringaMaiuscola = stringaOriginale.toUpperCase();
var stringaMinuscola = stringaOriginale.toLowerCase();

// sottostringa dalla terza alla sesta lettera
var sottostringa = stringaOriginale.slice(2,6);

// Sostituzione all'interno della stringa
var stringaModificata = stringaOriginale.replace("Javascript", "Web Dev");

// Stampiamo a video i risultati
console.log("Stringa originale: " + stringaOriginale);
console.log("Stringa maiuscola: " + stringaMaiuscola);
console.log("Stringa minuscola: " + stringaMinuscola);
console.log("Sottostringa (dalla terza alla sesta): " + sottostringa);
console.log("Stringa modificata: " + stringaModificata);