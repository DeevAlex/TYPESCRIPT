// Array<T> - T[]

function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor);
}

function touppercase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplyArgs(5, 5));
console.log(concatenaStrings('A', 'B', 'C'));
console.log(touppercase('a', 'b', 'c'));
