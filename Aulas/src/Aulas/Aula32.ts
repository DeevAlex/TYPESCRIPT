// Declaration merging em interfaces

// type Pessoa = { // nesse caso só a interface que pode duplicar e não gera erro, que é a declaration mergin
//   nome: string;
// };

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly idade?: number; // se caso existir ela não ser alterada
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

export const pessoa: Pessoa = {
  nome: 'Alex',
  sobrenome: 'Silveira',
  idade: 18,
  enderecos: ['Av. Silveira Santos Cruz'],
};

// porem nesses casos é melhor ter uma interface com tudo envolvido pois fica mais facil de ler e fica mais enchuta

// interface Pessoa {
//   nome: string;
//   readonly idade?: number; // se caso existir ela não ser alterada
//   readonly sobrenome: string;
//   readonly enderecos: readonly string[];
// }

// pessoa.enderecos.push('Faria Lima'); // readonly string[] - se estiver assim ali em cima vai cancelar os metodos
console.log(pessoa);
