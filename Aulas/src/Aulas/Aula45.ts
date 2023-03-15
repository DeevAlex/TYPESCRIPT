// Type Predicate (Predicado de tipos)

// ali no value is number é o Type Predicate
export function isNumber(value: unknown): value is number {
  // aqui o TS sabe que é boolean e ...
  return typeof value === 'number'; // sempre que esse boolean for true value vai ser um number // que é o value is number
}

// console.log(isNumber(123));
// console.log(isNumber('123'));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((soma, valor) => {
    if (isNumber(soma) && isNumber(valor)) {
      return soma + valor;
    }
    return soma;
  }, 0);

  return retorno;
}

// nesse caso ele pega o primeiro valor como referencia do tipo
console.log(soma(1, 2, 3));
// console.log(soma('6', '5', 3)); // erro
console.log(soma('a', 'b', 'c'));
console.log(soma(...[1, 2, 3, 'A', 'b', 'C', 1])); // driblar o erro
