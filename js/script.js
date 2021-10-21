/*
Stabiliamo e chiamiamo le variabili
Facciamo rispondere all'utente
Riportiamo le informazioni riportate
*/

const nameUser = prompt("Inserisci il tuo nome");
const lastNameUser = prompt("Inserisci il tuo cognome");
const colorPreferUser = prompt("Inserisci il tuo colore preferito");
const passwordGenerate = nameUser + lastNameUser + colorPreferUser + 21;



document.getElementById("passwordUser").innerHTML =  
`
  Password generate = ${passwordGenerate} <br>
  Lunghezza password = ${passwordGenerate.length}
`;

console.log(nameUser);
console.log(lastNameUser);
console.log(colorPreferUser);
console.log(passwordGenerate);


