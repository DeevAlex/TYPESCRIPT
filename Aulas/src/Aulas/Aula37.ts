// Overload de métodos e funções em TypeScript

// overload seria simplesmente baseado na assinatura da função, nos parametros que minha função vai receber, eu vou fazer a função se comportar de uma maneira diferente

// overload - uma função se comporta de maneira diferente baseado na quantidade de parametros e nos tipos que ela recebe ( mais explicado )

export type Adder = {
  (a: number): number;
  (a: number, b: number): number;
  (...args: number[]): number;
};

export const adder: Adder = (a: number, b?: number, ...args: number[]) => {
  if (args.length > 0) {
    return args.reduce((soma, valor) => soma + valor, 0) + a + (b || 0);
  }
  return a + (b || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
