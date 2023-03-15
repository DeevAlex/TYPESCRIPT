// Super - para acesso à super classe

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string, // passando daqui
  ) {}

  static falaOi(): void {
    // a diferença do metodo estatico para outro metodo é que você não tem acesso a ele pela variavel instanciada como essa p1, porém quem tem acesso a ele é a classe
    console.log('Oi');
  }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // aqui já no é mais this é a classe para pegar atributos staticos
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const p1 = new Pessoa('Alex', 'Junio', 18, '111.111.111.11');
const p2 = Pessoa.criaPessoa('Jorge', 'German');
Pessoa.falaOi();

console.log(p1);
console.log(p2);
