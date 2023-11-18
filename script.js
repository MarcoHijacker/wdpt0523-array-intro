//TODO: Array Intro

//! CONDITIONALS (Recap)
//? 0.a L'else if
// let gender = null;

// if(gender === "Male") {
//     console.log("Benvenuto!");
// } else if(gender === "Female") {
//     console.log("Benvenuta!");
// } else {
//     console.log("Ciao!");
// }

//? 0.b Switch-case
// let gender = "Male";

// switch (gender) {
//     case "Male":
//         console.log("Benvenuto!");
//         break;
//     case "Female":
//         console.log("Benvenuta!");
//         break;
//     case "Non binary":
//         console.log("Benvenut*!");
//         break;
//     default: // Tutto il resto...
//         console.log("Ciao!");
//         break;
// }

//! DATI STRUTTURATI
//? 1. Array
// Strutture e sintassi di accesso
//* Demo #1a - Stampa in console il valore 8 nell'array arr.
// let arr = [ 1, "2", { three: 3 }, [4, 5, [8, 9]] ];
// console.log(arr[3][2][0]);

//* Demo #1b - Sfruttando l'array students, stampa in console: Alex's note is 6 and Diana's note is 4.
// let students = [
// 	{ name: "Paulina", note: 5 },
// 	{ name: "Alex", note: 6 },
// 	{ name: "Diana", note: 4 }
// ];
// console.log(students[1].name + "'s note is " + students[1].note + " and " + students[2].name + "'s note is " + students[2].note);

//* Demo #1c - Sfruttando la matrice sotto, stampa in console 267 (stringa).
// let matrix = [
// 	[ 1, 2, 3 ],
// 	[ 4, 5, 6 ],
// 	[ 7, 8, 9 ]
// ];

// console.log("" + matrix[0][1] + matrix[1][2] + matrix[2][0]);

//? 2. Metodi per gli Arrays
//* Demo #2 - Testa su array tutti i metodi di array proposti nelle slides.
              // 0  1  2  3  4  5  6  
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];

// Proprietà length [output Type: Number]
//* Demo #2 - Determina il numero di elementi presenti nell'array.
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// console.log(array.length); // Output: 7

// METODI COMUNI
// a. concat [output Type: Array]
//* Demo #2a - Concatena alla fine di array l'8 ed il 9.
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// let arrayConcatenato = array.concat(8, 9);
// console.log(arrayConcatenato);
// console.log(array);

// b. indexOf [output Type: Int]
//* Demo #2b - Determina l'indice dell'elemento di valore 5 nell'array.
              // 0  1  2  3  4  5  6
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// let fiveIndex = array.indexOf(5);
// console.log(fiveIndex); // Output: 4

// c. lastIndexOf [output Type: Int]
//* Demo #2c - Replica nell'array il valore 3 due volte in posizioni consecutive. Determina quindi l'indice dell'ultimo valore 3 nell'array.
// let array = [ 1, 2, 3, 3, 3, 4, 5, 6, 7 ];
// console.log(array.lastIndexOf(3)); // Output: 4

// d. pop (M) [output Type: Any] (Removed item)
//* Demo #2d - Rimuovi l'ultimo elemento dell'array.
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// console.log(array.pop());
// console.log(array);

// e. push (M) [output Type: Int] (New array length)
//* Demo #2e - Aggiungi 3 nuovi elementi all'array e stampalo poi in console.
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// array.push(8, 9, "Pippo");
// console.log(array);

// f. slice(a, b) (estremo destro ESCLUSO!) [output Type: Array] (Slice)
//* Demo #2f - Stampa in console la fetta [3, 4, 5] dell'array.
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// console.log(array.slice(2, 5));
// console.log(array.slice(2)); // Seleziona la fetta dal punto di partenza fino alla fine dell'array!

// g. includes (output Type: Boolean)
//* Demo #2g - Controlla se il valore 6 è incluso nell'array.
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// console.log(array.includes(6));

// h. join (output Type: String)
//* Demo #2h - Stampa gli elementi dell'array, divisi da virgola, 
//* in una 'mega' stringa.
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// console.log(array.join(","));

// i. splice(x, y) (M) (A posizione x, togli y elementi, compreso quello di partenza!) [output Type: Array]
//* Demo #2i - Rimuovi dall'array originale la 'fetta' [5, 6]. 
//* Stampa poi l'array.
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// console.log(array.splice(4, 2)); // Output [5,6]
// console.log(array);

//! LOOP + ARRAY
//? 3. Ciclare un Array

//* Demo #3a - Stampa in console tutti gli elementi di array usando un ciclo for (classico).

// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// for (let index = 0; index < array.length; index++) {
//         console.log(array[index]);
//         // Step 0: index = 0, array[0] = 1, index 0->1
//         // Step 1: index = 1, array[1] = 2, index 1->2
//         // Step 2: index = 2, array[2] = 3, index 2->3
//         // (...)
//         // Step 5: index = 6, array[6] = 7, index 6->7
//         // Step 6: index = 7, CONDIZIONE VIOLATA, fine ciclo. 
// }

//* Demo #3b - Stampa in console tutti gli elementi di array 
//* usando un ciclo for-of.
// for (let fruit of array) {
//     console.log(fruit);
// }


//TODO EXTRA (Se c'è tempo...)
//* Dato un array di numeri interi, stampare in console il doppio del valore dell'elemento (se questo ha indice pari), il triplo se questo ha indice dispari.
// Fornite voi la vostra soluzione...
// La mia soluzione:
let array = [ 1, 2, 3, 4, 5, 6, 7 ];
for (let i = 0; i < array.length; i++)
    console.log(i % 2 ? 3 * array[i] : 2 * array[i]);