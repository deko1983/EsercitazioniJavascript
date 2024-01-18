
function fibonacci(n)  {
    var serie = [0,1];

    for (var i=2; i<=n; i++)  {
        serie.push(serie[i-2] + serie[i-1]);
    }
    
    return serie;
}

console.log("Serie di fibonacci fino a 10:");

var risultato = fibonacci(10);
// loop sull'array risultante
for (var i=0; i < risultato.length; i++)  {
    console.log(i + ": " + risultato[i]);
}

// le funzioni sono 'first class citizens', ovvero definisono
// un tipo definito dal linguaggio, ne segue che posso assegnare 
// una funzione a una variabile

var fib = fibonacci;

console.log("Serie di fibonacci fino a 10:");

risultato = fib(12);
// loop sull'array risultante
for (var i=0; i < risultato.length; i++)  {
    console.log(i + ": " + risultato[i]);
}

// e posso anche definire così una funzione che riceve una funzione di stampa
// come secondo parametro
var fibonacciEStampa = function(n, funStampa)  {
    var serie = fib(n);

    if (funStampa !== undefined)
        funStampa(serie);
}

// Funzione di stampa senza indice
var printArray = function(arr)  {
    if (Array.isArray(arr))  {
        for (var i=0; i < arr.length; i++)  {
            console.log(i + ": " + arr[i]);
        }
    }
    
}

// Funzione di stampa con indice
var printArrayNoIndex = function(arr)  {
    if (Array.isArray(arr))  {
        for (var i=0; i < arr.length; i++)  {
            console.log(arr[i]);
        }
    }
}

// chiamo la medesima funzione usando diverse funzioni di stampa
fibonacciEStampa(5, printArray);
fibonacciEStampa(5, printArrayNoIndex);

