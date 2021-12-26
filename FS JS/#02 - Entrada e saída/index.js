// Incluíndo o módulo process para trabalhar com entrada e saída de dados.
const process = require('process');

//  Mostrando no console todos os parâmetros passados para o Script o argv.
//  Exemplo: $ node index.js --MyName Zé
//  --MyName e Zé são exemplos de parâmetros que serão mostrados no console.
console.log(process.argv);

//  Saída: Escrevendo no console com o process:
console.log("Hello Console with CONSOLE.LOG!")
process.stdout.write("Hello Console with PROCESS!!");

//  Entrada: Recebendo dados através do console.
//  IMPORTANTE: process.exit() serve para encerrar a entrada de dados.
process.stdout.write("\n\nInforme seu nome: ");
process.stdin.on('data', (KeyboardEvent) => {
    process.stdout.write(`\nMuito prazer, ${KeyboardEvent}Bons estudos!`);
    process.exit();
});
