// Decoradores de método (method decorator)

function decorator(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    writable: false,
    enumerable: false,
    configurable: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
    // ...
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const p = new UmaPessoa('João', 'Silveira', 99.9);
const metodo = p.metodo('Olá Mundo');

console.log(metodo);
