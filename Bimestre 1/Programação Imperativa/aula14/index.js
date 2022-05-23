var readlineSync = require('readline-sync');
/* console.log(readlineSync) */

// Wait for user's response.
var nome = readlineSync.question('Qual o seu nome? ');
console.log('Olá ' + nome + '!');
 
// Handle the secret text (e.g. password).
var comidaFavorita = readlineSync.question('Qual a sua comida favorita? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Ah, ' + nome + ' ama ' + comidaFavorita + '!');