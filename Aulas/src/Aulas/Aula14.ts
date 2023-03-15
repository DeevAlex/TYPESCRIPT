// Intersection Types
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome | TemSobrenome | TemIdade; // OR
type Pessoa2 = TemNome & TemSobrenome & TemIdade; // AND

// type AB = 'A' | 'B';
// type AC = 'A' | 'C';
// type AD = 'D' | 'A';
// type Intersecao = AB & AC & AD; // vai pegar o a porque ele é a Intersecao entre essas variaveis

export const pessoa: Pessoa = {
  // aqui só vai haver erro caso não mande nenhum ali de cima
  nome: 'Alex',
  idade: 18,
};

export const pessoa2: Pessoa2 = {
  // aqui vai precisar enviar todos que estão sendo pedidos na pessoa2
  nome: 'Alex',
  sobrenome: 'Joséliano',
  idade: 18,
};

console.log(pessoa);
