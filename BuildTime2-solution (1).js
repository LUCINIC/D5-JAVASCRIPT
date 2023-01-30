// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50

let total = 0
for (const price of prices) {
  total += price
}
if (total > 100) {
  shippingCost = 0
}
if (amy.isAmbassador) {
  console.log(total)
  total -= total * 30 + shippingCost
} else {
  total += shippingCost
}
console.log(total)




//Iniziamo con la definizione degli utenti:

  //  Costruiamo 3 oggetti JavaScript, marco, paul e amy, rappresentano 3 utenti diversi.
    //Ogni oggetto ha 3 proprietà: name, lastName e isAmbassador.
    //La proprietà isAmbassador indica se l'utente è un ambasciatore o meno.

//La lista dei prezzi e il costo di spedizione vengono definiti come segue:

    //La lista dei prezzi è un array di numeri, che rappresenta i prezzi degli articoli nel carrello.
    //Il costo di spedizione è una variabile che contiene un numero (50 in questo caso) che rappresenta il costo fisso per la spedizione.

//La logica per calcolare il totale del carrello è la seguente:

    //Inizializziamo una variabile "total" con un valore di 0.
    //Utilizziamo un ciclo "for" per scorrere attraverso la lista dei prezzi e sommare i prezzi uno alla volta alla variabile "total".
    //Utilizziamo un if statement per verificare se il valore totale è superiore a 100. Se è vero, il costo di spedizione viene impostato su zero, altrimenti il costo di spedizione rimane 50.
    //Utilizziamo un altro if statement per verificare se l'utente "amy" è un ambasciatore, se è vero, il valore totale viene scontato del 30% (sottraendo alla variabile "total" il 30% del suo valore attuale) e poi vengono aggiunti il costo di spedizione.
    //Se l'utente "amy" non è un ambasciatore, il valore totale viene semplicemente sommato al costo di spedizione.
    //Infine, il valore totale viene stampato nella console.

//Per quanto riguarda il calcolo dello sconto del 30% si utilizzata la seguente formula:
//total -= total * 30 /100

//In sintesi, il codice calcola il totale del carrello (sommando i prezzi degli articoli) e, a seconda che l'utente sia un ambasciatore o meno, applica o meno uno sconto del 30% prima di aggiungere il costo di spedizione. Se il totale supera i 100, la spedizione è gratuita.