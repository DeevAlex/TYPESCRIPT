/* eslint-disable */

//  Sintaxe de Type Annotations - Ex: idade: number

// Tipos básicos ( aqui ocorre inferência de tipos )
// let nome: string = 'Olá';
// let idade: number = 10; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
// let adulto: boolean = true; // true ou false, aqui você não coloca os truefy ou falsy como '', ou 0
// let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n; // BigInt


// Arrays
let arrayOfNumbers: Array<number> = [5, 10, 15, 20]
let arrayOfNumbers2: number[] = [5, 10, 15, 20]
let arrayOfStrings: Array<string> = ["5", "10", "15", "20"]
let arrayOfStrings2: string[] = ["5", "10", "15", "20"]


// Objetos
// let pessoa: { nome: string, idade: number, adulto?: boolean } = { // esse ?: no <variavel>?: <tipo> refere-se a ser opcional
//     nome: 'Alex',
//     idade: 18,
//     adulto: true,
// }


// Funções
// function soma(x: number, y: number) {
//     return console.log(x + y)
// }

// const soma2: (x: number, y: number) => number = (x, y) => x + y;

// soma2(5, 5);


// coloque os tipos caso o javascript não consiga identificar os tipos
