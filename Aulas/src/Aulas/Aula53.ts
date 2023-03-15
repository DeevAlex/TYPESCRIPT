// Decoradores de propriedades (property decorators)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function decorator(classPrototype: any, nome: string): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorator
  nome: string;
  @decorator sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

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

export const p = new UmaPessoa('Joao', 'Silveira', 99.9);
export const metodo = p.metodo('Olá Mundo!');

console.log(metodo);
