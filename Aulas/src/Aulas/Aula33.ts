// Type Guard - Refinando Tipos

export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`; // TypeGuard
}

console.log(add(1, '2'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

export function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome); // esse in é um controle de fluxo e quando usamos o typescript sabe que a gente está refinando o tipo
  // porem pode ser qualquer controle de fluxo
  // if (obj instanceof Aluno) console.log(obj.nome); // tbm é um typeguard
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('A cor dele é: ', obj.cor);
      return;
  }
}

mostraNome(new Aluno('Caldeira'));
mostraNome({ tipo: 'animal', cor: 'Caramelo' });
