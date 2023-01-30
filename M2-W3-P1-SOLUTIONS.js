/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  return l1 * l2
}
const areaResult = area(3, 4)
console.log(areaResult)

//La prima linea di codice crea una funzione chiamata "area" che riceve due parametri, chiamati "l1" e "l2".
//La seconda linea di codice calcola l'area del rettangolo utilizzando l'espressione "l1 * l2", che moltiplica i due parametri inseriti.
//La terza linea di codice crea una costante chiamata "areaResult" e la assegna all'esecuzione della funzione "area" con i valori 3 e 4 come input.
//La quarta linea di codice utilizza il metodo "console.log" per stampare il valore di "areaResult" sul terminale.

//In sintesi, la funzione "area" riceve come input la lunghezza e larghezza di un rettangolo e restituisce l'area del rettangolo moltiplicando le lunghezza per larghezza. Successivamente vengono utilizzati i valori 3 e 4 come input per la funzione area e il risultato viene stampato sul terminale.



/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

// if(typeof num1 === "number" && typeof num2 === "number") {

// }
//
const crazySum = function (num1, num2) {
  //num1 is a number, num2 is a number
  if (num1 === num2) {
    return (num1 + num2) * 3
  } else {
    return num1 + num2
  }
}

// const crazySum2 = function(num1,num2) {
//   return num1 === num2 ? (num1+num2) * 3 : num1 + num2
// }

console.log(crazySum(3, 3))




/*La funzione inizia con la dichiarazione function crazySum(num1, num2). Questa riga specifica che stiamo creando una funzione chiamata "crazySum" che accetta due parametri, "num1" e "num2", che rappresentano i due numeri che verranno forniti quando la funzione verrà chiamata.
La riga successiva è un'istruzione di controllo if (num1 === num2). Questa istruzione verifica se i valori dei due parametri "num1" e "num2" sono uguali tra loro. Se lo sono, l'istruzione dentro il corpo del controllo if verrà eseguita.
All'interno del corpo del controllo if, c'è una istruzione return (num1 + num2) * 3;. Questa istruzione calcola la somma dei due parametri "num1" e "num2", moltiplicandola per 3 e poi la restituisce come risultato della funzione.
La riga successiva è un'istruzione di controllo else. Questa istruzione specifica che se i valori dei parametri "num1" e "num2" non sono uguali tra loro, l'istruzione dentro il corpo del controllo else verrà eseguita.
All'interno del corpo del controllo else, c'è una istruzione return num1 + num2;. Questa istruzione calcola la somma dei due parametri "num1" e "num2" e restituisce il risultato come risultato della funzione.
La funzione termina con la chiusura delle parentesi graffe.

In generale, la funzione "crazySum" accetta due numeri interi come parametri, e verifica se i loro valori sono uguali tra loro. Se lo sono, restituisce la loro somma moltiplicata per 3, altrimenti restituisce la loro somma.

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

const crazyDiff = function (num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3
  } else {
    return Math.abs(num - 19)
  }
}
// const crazyDiff = (num) =>
// num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19);
console.log(crazyDiff(3))




/*Inizia con la dichiarazione const crazyDiff = function (num). Questa riga crea una costante chiamata "crazyDiff" che fa riferimento ad una funzione anonima che accetta un parametro chiamato "num"
La riga successiva è un'istruzione di controllo if (num > 19). Questa istruzione verifica se il valore del parametro "num" è maggiore di 19. Se lo è, l'istruzione dentro il corpo del controllo if verrà eseguita.
All'interno del corpo del controllo if, c'è una istruzione return Math.abs(num - 19) * 3. Questa istruzione calcola la differenza assoluta tra il parametro "num" e 19, utilizzando la funzione Math.abs() e moltiplica il risultato per 3, quindi restituisce il valore come risultato della funzione.
La riga successiva è un'istruzione di controllo else. Questa istruzione specifica che se il valore del parametro "num" non è maggiore di 19, l'istruzione dentro il corpo del controllo else verrà eseguita.
All'interno del corpo del controllo else, c'è una istruzione return Math.abs(num - 19). Questa istruzione calcola la differenza assoluta tra il parametro "num" e 19 utilizzando la funzione Math.abs() e restituisce il valore come risultato della funzione.
La funzione termina con la chiusura delle parentesi graffe.

In generale, la funzione "crazyDiff" accetta un numero come parametro e calcola la differenza assoluta tra il parametro e 19. Se il valore del parametro è maggiore di 19, la funzione restituisce tale risultato moltiplicato per 3, altrimenti restituisce il valore calcolato.

!!!!!!versione equivalente!!!!!

// const crazyDiff = (num) =>
// num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19)
console.log(crazyDiff(3))

un'altra versione equivalente della funzione "crazyDiff" che ti ho fornito in precedenza. Utilizza la sintassi di una funzione arrow e l'operatore ternario ? per condensare il codice.

    Inizia con la dichiarazione const crazyDiff = (num) =>. Questa riga crea una costante chiamata "crazyDiff" che fa riferimento ad una funzione arrow che accetta un parametro chiamato "num"
    La riga successiva è un'espressione ternaria num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19). Questa espressione ternaria verifica se il valore del parametro "num" è maggiore di 19. Se lo è, restituisce la differenza assoluta tra il parametro "num" e 19 moltiplicato per 3, altrimenti restituisce la differenza assoluta tra il parametro "num" e 19.
    La funzione termina con la chiusura del punto e virgola

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}


console.log('ex 4', boundary(3))


/*Inizia con la dichiarazione const boundary = function (n). Questa riga crea una costante chiamata "boundary" che fa riferimento ad una funzione anonima che accetta un parametro chiamato "n".
La riga successiva è un'istruzione di controllo if ((n > 20 && n <= 100) || n === 400). Questa istruzione utilizza una combinazione di operatori di confronto e di logica per verificare se "n" è maggiore di 20 e minore o uguale a 100 oppure se "n" è uguale a 400. Se almeno una di queste condizioni è vera, l'istruzione dentro il corpo del controllo if verrà eseguita.
All'interno del corpo del controllo if, c'è una istruzione return true. Questa istruzione restituisce il valore booleano vero come risultato della funzione.
La riga successiva è un'istruzione di controllo else. Questa istruzione specifica che se nessuna delle condizioni all'interno dell'istruzione if è vera, l'istruzione dentro il corpo del controllo else verrà eseguita.
All'interno del corpo del controllo else, c'è una istruzione return false. Questa istruzione restituisce il valore booleano falso come risultato della funzione.
La funzione termina con la chiusura delle parentesi graffe.

In generale, la funzione "boundary" accetta un numero come parametro e restituisce vero se il parametro è compreso tra 20 e 100 inclusi oppure se il parametro è uguale a 400 altrimenti restituisce falso.


!!!!!!versione equivalente!!!!!
//  const boundary = function(n) {
//  return ((n > 20 && n <=100) || n === 400) ?  true :  false
// }
console.log('ex 4', boundary(3))

    Inizia con la dichiarazione const boundary = function (n). Questa riga crea una costante chiamata "boundary" che fa riferimento ad una funzione anonima che accetta un parametro chiamato "n".
    La riga successiva è un'espressione ternaria ((n > 20 && n <= 100) || n === 400) ? true : false. Questa espressione verifica se "n" è maggiore di 20 e minore o uguale a 100 oppure se "n" è uguale a 400, se questa condizione è vera restituisce true, altrimenti restituisce false.
    La funzione termina con la chiusura delle parentesi graffe.

In generale, la funzione "boundary" accetta un numero come parametro e restituisce vero se il parametro è compreso tra 20 e 100 inclusi oppure se il parametro è uguale a 400 altrimenti restituisce falso.

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify = function (str) {
  if (str.startsWith('code') /* true / false */) {
    return str
  } else {
    return 'code ' + str
  }
}
console.log(codify('coders')) // ritorna coders
console.log(codify('Hello')) // ritorna code Hello

/*La funzione "codify" prende in input una stringa "str" e controlla se inizia con la parola "code" utilizzando il metodo "startsWith()". Se la condizione è vera, la funzione ritorna la stringa originale. Se invece la condizione è falsa, la funzione aggiunge la parola "code" all'inizio della stringa e la ritorna.

"const codify = function (str) {" - questa riga dichiara una funzione costante chiamata "codify" che prende in input una stringa "str".
"if (str.startsWith('code') /* true / false *//*questa riga controlla se la stringa "str" inizia con la parola "code" utilizzando il metodo "startsWith()". Se la condizione è vera, esegue il codice all'interno delle parentesi graffe.
"return str" - questa riga fa ritornare la stringa originale se la condizione nel "if" è vera.
"} else {" - questa riga esegue il codice all'interno delle parentesi graffe se la condizione nel "if" è falsa.
"return 'code ' + str" - questa riga fa ritornare la stringa originale con l'aggiunta della parola "code" all'inizio della stringa.
"console.log(codify('coders'))" - questa riga stampa il risultato della funzione "codify" con l'input "coders"
"console.log(codify('Hello'))" - questa riga stampa il risultato della funzione "codify" con l'input "Hello"



!!!!!Spiegazione metodo startsWith!!!!
Il metodo JavaScript "startsWith()" è utilizzato per controllare se una stringa inizia con un determinato prefisso o carattere. Restituisce "true" se la stringa inizia con il prefisso o il carattere specificati, altrimenti "false".
La sintassi per utilizzare questo metodo è:

string.startsWith(searchString[, position])

    "string" è la stringa su cui si desidera eseguire la verifica.
    "searchString" è la stringa o il carattere che si desidera cercare all'inizio della stringa.
    "position" (opzionale) è la posizione di inizio della ricerca nella stringa. Il valore predefinito è 0.

Esempio:
let str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("World")); // false
console.log(str.startsWith("World", 7)); // true

Nel primo esempio, il metodo startsWith() controlla se la stringa "str" inizia con la parola "Hello" e restituisce "true" poiché la stringa inizia effettivamente con "Hello".
Nel secondo esempio, il metodo startsWith() controlla se la stringa "str" inizia con la parola "World" e restituisce "false" poiché la stringa inizia con "Hello".
Nel terzo esempio, la posizione di inizio della ricerca è impostata su 7, quindi il metodo startsWith() controlla se la stringa "str" a partire dalla posizione 7 inizia con la parola "World" e restituisce "true" poiché la stringa "World!" inizia effettivamente con "World" a partire dalla posizione 7.

Il metodo startsWith() è supportato in tutti i browser moderni, ad eccezione di Internet Explorer. In caso di necessità, è possibile utilizzare una funzione alternativa per simularlo in Internet Explorer.

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

const check3and7 = function (n) {
  if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
    //n is more than 0
    //n / 3 === reminder of 0 OR n / 7 reminder of 0
    return true
  } else {
    return false
  }
}
// const check3and7 = (n) =>
//   n >= 0 && (n % 3 === 0 || n % 7 === 0) ? true : false;
// const check3and7 = function(n) {
//   return n >= 0 && (n % 3 === 0 || n%7 === 7) ? true : false
// }
console.log(check3and7(20))



/*"const check3and7 = function (n) {" - questa riga dichiara una funzione costante chiamata "check3and7" che prende in input un numero intero "n".
"if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {" - questa riga controlla se "n" è maggiore o uguale a zero e se "n" è divisibile per 3 o per 7. Il simbolo "&&" indica che entrambe le condizioni devono essere verificate perché la condizione sia vera, mentre il simbolo "||" indica che una delle due condizioni deve essere verificata.
"return true" - se entrambe le condizioni sono verificate, la funzione ritorna "true".
"} else {" - se una delle condizioni non è verificata, esegue il codice all'interno delle parentesi graffe.
"return false" - se una delle condizioni non è verificata, la funzione ritorna "false".

In sintesi, la funzione controlla se il numero in input è maggiore o uguale a zero e se è divisibile per 3 o per 7, restituisce true se è così, false altrimenti.



/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

const reverseString = function (str) {
  return str.split('').reverse('').join('')

  //let splitString = str.split("")
  //let reverseString = splitString.reverse()
  //let finalString = reverseString.join("")
}
console.log(reverseString('EPICODE'))


/*La funzione "reverseString" prende in input una stringa "str" e la inverte utilizzando una combinazione di metodi JavaScript.

    "return str.split('')" - Questo metodo divide la stringa "str" in un array di caratteri utilizzando il parametro vuoto "" come separatore. Ad esempio, "hello" diventa ["h", "e", "l", "l", "o"].
    ".reverse('')" - Questo metodo inverte l'ordine degli elementi all'interno dell'array. Ad esempio, ["h", "e", "l", "l", "o"] diventa ["o", "l", "l", "e", "h"].
    ".join('')" - Questo metodo unisce gli elementi dell'array in una stringa utilizzando il parametro vuoto "" come separatore. Ad esempio, ["o", "l", "l", "e", "h"] diventa "olleh".

In sintesi, la funzione divide la stringa in un array di caratteri, inverte l'ordine degli elementi e unisce di nuovo gli elementi in una stringa per ottenere la stringa originale invertita.

Esempio:
console.log(reverseString("EPICODE")) // "EDOCIPE"

Il codice che segue "console.log(reverseString('EPICODE'))" stampa il risultato della funzione "reverseString" con l'input "EPICODE" e in questo caso la stringa originale "EPICODE" viene invertita e diventa "EDOCIPE"

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

// const upperFirst = function (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
//   /*
//     let firstChar = str.chatAt(0)
//     let uppercaseChar = firstChar.toUpperCase()
//     let cutString = str.slice(1)
//     return uppercaseChar + cutString
//   */
// };

const upperFirstPhrase = function (str) {
  
  let words = str.split(' ')
  let finalString = []
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0)
    console.log(firstChar)
    let uppercaseChar = firstChar.toUpperCase()
    let cutString = words[i].slice(1)
    let finalWord = uppercaseChar + cutString
    finalString.push(finalWord)
  }
  console.log(finalString.join(''))
}

upperFirstPhrase('hello world')


/*Questa funzione "upperFirstPhrase" prende in input una stringa "str" e converte la prima lettera di ogni parola in maiuscolo.
"let words = str.split(' ')" - Questa riga divide la stringa "str" in un array di parole utilizzando lo spazio " " come separatore. Ad esempio, "hello world" diventa ["hello", "world"].
"let finalString = []" - Questa riga dichiara un array vuoto chiamato "finalString", che verrà utilizzato per memorizzare le parole con le prime lettere maiuscole.
"for (let i = 0; i < words.length; i++) {" - Questo è un ciclo "for" che itera attraverso ogni elemento dell'array "words".
"let firstChar = words[i].charAt(0)" - Questa riga estrae la prima lettera della parola corrente utilizzando il metodo "charAt()".
"let uppercaseChar = firstChar.toUpperCase()" - Questa riga converte la lettera estratta in maiuscolo utilizzando il metodo "toUpperCase()".
"let cutString = words[i].slice(1)" - Questa riga taglia la prima lettera della parola corrente utilizzando il metodo "slice()".
"let finalWord = uppercaseChar + cutString" - Questa riga unisce la lettera maiuscola con la parola tagliata per ottenere la parola con la prima lettera maiuscola.
"finalString.push(finalWord)" - Questa riga aggiunge la parola con la prima lettera maiuscola all'array "finalString".
"console.log(finalString.join(''))" - Questa riga stampa l'array "finalString" unendo gli elementi in una stringa utilizzando il metodo "join()".

In sintesi, la funzione divide la stringa in un array di parole, itera attraverso ogni parola, estrae la prima lettera, la converte in maiuscolo, taglia la prima lettera dalla parola, unisce la lettera maiuscola con la parola tagliata e memorizza la parola con la prima lettera maiuscola in un array. Infine, l'array viene stampato come una stringa.


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

const cutString = function (str) {
  return str.slice(1, str.length - 1) 
}
console.log(cutString('EPICODE'))

/*Questa funzione "cutString" prende in input una stringa "str" e taglia i primi e gli ultimi caratteri della stringa.

    "return str.slice(1, str.length - 1)" - Questa riga utilizza il metodo "slice()" per tagliare la stringa "str" a partire dal secondo carattere (indice 1) fino all'ultimo carattere (indice "str.length - 1"). Il metodo slice() prende 2 argomenti: l'indice iniziale e l'indice finale della sezione della stringa da estrarre. In questo caso l'indice iniziale è 1 e l'indice finale è la lunghezza della stringa meno 1 per prendere tutti i caratteri tranne il primo e l'ultimo.

Il codice che segue "console.log(cutString('EPICODE'))" stampa il risultato della funzione "cutString" con l'input "EPICODE" e in questo caso la stringa originale "EPICODE" viene tagliata e diventa "PICOD"

Nota che anche .slice(1,-1) funziona, in questo caso stiamo passando solo un argomento alla funzione slice (1), quello iniziale, e l'indice finale è calcolato in modo implicito come -1 che indica l'ultimo elemento della stringa.

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }
  return arr
}
console.log(giveMeRandom(5))



/*"const arr = []" - Questa riga dichiara un array vuoto chiamato "arr", che verrà utilizzato per memorizzare i numeri casuali.
"for (let i = 0; i <= n; i++) {" - Questo è un ciclo "for" che itera da 0 fino a "n".
"arr.push(Math.floor(Math.random() * 10))" - Questa riga genera un numero casuale compreso tra 0 e 9 utilizzando la funzione Math.random() e lo arrotonda verso il basso utilizzando Math.floor() e lo inserisce nell'array "arr" utilizzando il metodo push().

In sintesi, la funzione crea un array vuoto, genera n numeri casuali compresi tra 0 e 9 utilizzando un ciclo for, e li inserisce nell'array, infine restituisce l'array.

Esempio:
console.log(giveMeRandom(5)) // [4, 3, 2, 9, 1]/*
