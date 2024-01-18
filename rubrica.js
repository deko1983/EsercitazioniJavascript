// contatto in rubrica
var contatto = {
    nome: 'Roberto',
    cognome: 'Baggio',
    telefono: '+392458939505'
};

// voglio stampare tutte le chiavi dell'oggetto
for (var k in contatto)
    console.log(k + ": " + contatto[k]);


var values = Object.values(contatto);    
// voglio stampare tutte le chiavi dell'oggetto
for (var v of values)
    console.log(v);

// voglio stampare tutte le entry (coppie chiave-valore)
var entries = Object.entries(contatto);

for (var [k, v] of entries)
    console.log(k + ": " + v);

// accesso per dot notation
console.log(contatto.nome);
console.log(contatto.cognome);
console.log(contatto.telefono);

// accesso per parentesi quadre
console.log(contatto['nome']);
console.log(contatto['cognome']);
console.log(contatto['telefono']);

var key = 'cognome';

// posso usare solo l'accesso per parentesi quadre
console.log(contatto[key]);

contatto['indirizzo'] = 'via Soderini';
contatto.zipcode = '20123';

for (var k in contatto)
    console.log(k + ": " + contatto[k]);