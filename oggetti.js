
// oggetto letterale
var team = {
    name : 'Liverpool',
    europeanTitles : 40
}

// loop sui valori
var teamValues = Object.values(team);

for (v of teamValues)  {
    console.log(v);
}
    

// loop sulle entries
var teamEntries = Object.entries(team);

for (var [key, value] of teamEntries)  {
    console.log(key + ": " + value);
}  
    

// oggetto letterale, definisce delle funzioni come properties
var rect = { 
    base: 10, 
    altezza: 23, 
    area: function() {
        return this.base * this.altezza;
    },
    toString: function() {
        return "Area: " + this.area() + ", base: " + this.base + ", altezza: " + this.altezza;
    }
}
// accesso per dot notation
console.log(rect.toString());
// accesso con notazione delle parentesi quadre
console.log(rect["toString"]());

// ricerca di proprietà all'interno dell'oggetto con operatore in
if ('base' in rect)  {
    console.log('Base è tra le proprietà di rect: ' + rect.base);
}
    
// ricerca di proprietà all'interno dell'oggetto metodo hasOwnProperty
if (rect.hasOwnProperty('altezza'))  {
    console.log('Altezza è tra le proprietà di rect: ' + rect.altezza);
}
    