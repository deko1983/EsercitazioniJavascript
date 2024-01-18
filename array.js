function rotazioneSinistra(array, n) {
    // Assicurati che n sia un numero positivo
    n = n % array.length;
  
    // Effettua la rotazione
    const risultato = [...array.slice(n), ...array.slice(0, n)];
    
    return risultato;
  }
  
  // Esempio di utilizzo
  const arrayOriginale = [1, 2, 3, 4, 5];
  const posizioniDaRuotare = 2;
  
  const arrayRuotato = rotazioneSinistra(arrayOriginale, posizioniDaRuotare);
  
  console.log("Array originale:", arrayOriginale);
  console.log("Array ruotato a sinistra di", posizioniDaRuotare, "posizioni:", arrayRuotato);

  function lunghezzaSottosequenzaCrescente(array) {
    if (array.length === 0) {
      return 0;
    }
  
    // Inizializza un array per memorizzare le lunghezze delle sottosequenze crescenti
    const lunghezze = Array(array.length).fill(1);
  
    // Trova la lunghezza massima della sottosequenza crescente
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i] > array[j] && lunghezze[i] < lunghezze[j] + 1) {
          lunghezze[i] = lunghezze[j] + 1;
        }
      }
    }
  
    // Trova la lunghezza massima nell'array delle lunghezze
    const lunghezzaMassima = Math.max(...lunghezze);
  
    return lunghezzaMassima;
  }
  
  // Esempio di utilizzo
  const arrayEsempio = [10, 22, 9, 33, 21, 50, 41, 60, 80];
  const lunghezzaMassima = lunghezzaSottosequenzaCrescente(arrayEsempio);
  console.log(lunghezzaMassima);