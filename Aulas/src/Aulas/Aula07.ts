// Tipo null e undefined
// let x;
// if (typeof x === 'undefined') x = 20;
// console.log(x);

// export function createPearson( // abertura da função
//   firstName: string,
//   lastName?: string,
// ): {
//   // type annotation
//   firstName: string;
//   lastName?: string; // se for opcional vai sempre ter que checar se existe no objeto
// } {
//   // corpo da função
//   return {
//     firstName,
//     lastName,
//   };
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta Inválida');
} else {
  console.log(squareOfTwoNumber);
}

if (squareOfTwoString === null) {
  console.log('Conta Inválida');
} else {
  console.log(squareOfTwoString);
}
