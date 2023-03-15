// Tipos Literais

// nos vamos geralmente usar const para criar um tipo literal, se n podermos usar const vamos fazer uma aserção numa chave, <chave>: <valor> as const

let q = 10;
q = 0b1010;

// let a: 100 = 100; // tipo literal, subtipo de number, desse modo não é aconselhavel
let ay = 100 as const; // eslint-disable-line

const ya = 10;

// export const pearson = {
//   nome: 'Alex' as const,
//   sobrenome: 'Joelson',
// };

// pearson.nome = 'José'; se tiver as const ali no objeto ele não vai deixar redeclarar o valor

// export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
//   return cor;
// }

console.log(q);
console.log(ya);
// console.log(escolhaCor('Amarelo'));
// console.log(pearson);
