// Generics com Interfaces e Type Alias

export interface PessoaProtocolo1<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

export interface PessoaProtocolo2<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

export type PessoaProtocolo3<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

export type PessoaProtocolo4<T, U> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

export const aluno1: PessoaProtocolo1<string, number> = {
  nome: 'Silvana',
  sobrenome: 'Jislaine',
  idade: 18,
};

export const aluno2: PessoaProtocolo1<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 789,
};

export const aluno3: PessoaProtocolo2 = {
  nome: 'Gislaine',
  sobrenome: 'Camarões',
  idade: 38,
};

export const aluno4: PessoaProtocolo3 = {
  nome: 'Gislaine',
  sobrenome: 'Camarões',
  idade: 38,
};

export const aluno5: PessoaProtocolo4<string, number> = {
  nome: 'Gislaine',
  sobrenome: 'Camarões',
  idade: 38,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
console.log(aluno4);
console.log(aluno5);
