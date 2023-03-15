// Decorator Factories (Fábrica de decoradores)

function inverteNomeCor(param1: string, param2: string) {
  // Closure
  // nesse caso ali é meio que uma tipagem só que quando colocamos new para falar que é um construtor de classe
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorator e recebi: ', target);
    // classe anonima
    return class extends target {
      cor: string;
      nome: string;
      constructor(...args: any[]) {
        super(...args);
        this.cor = this.inverte(args[0]);
        this.nome = this.inverte(args[1]);
        // this.cor = 'Qualquer coisa'; // aqui ele atribui esse valor na frente do valor informado na hora da instancia
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

// para fazer o typescript fazer chamada automaticamente coloque @<função>, dai nesse caso agora consigo passar parametros para dentro do meu decorator
@inverteNomeCor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

// esse aq finge que é o objeto mas eu fiz uma coisa antes de entregar a classe, o decorator é isso é fazer uma coisa antes de entregar o objeto
const animal = new Animal('Caramelo', 'Caramelito');

console.log(animal);
