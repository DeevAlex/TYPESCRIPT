// This em function e arrow function

export function funcao(this: Date, argumento1: string, age: number): void {
  console.log(this);
  console.log(argumento1, age);
}

funcao.call(new Date(), 'Alex', 18);
funcao.apply(new Date(), ['Alex', 18]);

// cuidado para não criar uma arrow function e travar o this como escopo global
