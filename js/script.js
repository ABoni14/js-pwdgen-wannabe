/*
Stabiliamo e chiamiamo le variabili
Facciamo rispondere all'utente
Riportiamo le informazioni riportate
*/

const nameUser = prompt("Inserisci il tuo nome");
const lastNameUser = prompt("Inserisci il tuo cognome");
const colorPreferUser = prompt("Inserisci il tuo colore preferito");
const ageUser = parseInt(prompt ("Inserisci la tua età"));
const passwordGenerate = nameUser + lastNameUser + colorPreferUser + ageUser;


document.getElementById("passwordUser").innerHTML =  
`
  Password generate = ${passwordGenerate}
`;

console.log(nameUser);
console.log(lastNameUser);
console.log(colorPreferUser);
console.log(ageUser);
console.log(passwordGenerate);


