// Restrições em Generics (constraints)

// quando formos fazer uma restrição coloque extends dentro dos generics
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

export const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

export const animal = {
  cor: 'Caramelo',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
const idade = obterChave(animal, 'idade');

console.log(vacinas);
console.log(cor);
console.log(idade);
