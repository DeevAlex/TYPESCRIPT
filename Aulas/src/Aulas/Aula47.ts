// Decorator de classes no TypeScript - Introdução

// para fazer o typescript fazer chamada automaticamente coloque @<função>
@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// nesse caso ali é meio que uma tipagem só que quando colocamos new para falar que é um construtor de classe
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  // classe anonima
  return class extends target {
    cor: string;
    nome: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this.cor = this.inverte(args[0]);
      this.nome = this.inverte(args[1]);
      // this.cor = 'Qualquer coisa'; // aqui ele atribui esse valor na frente do valor informado na hora da instancia
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

// esse aq finge que é o objeto mas eu fiz uma coisa antes de entregar a classe, o decorator é isso é fazer uma coisa antes de entregar o objeto
const animal = new Animal('Caramelo', 'Caramelito');

console.log(animal);
