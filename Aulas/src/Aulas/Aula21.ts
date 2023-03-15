// Super - para acesso à super classe

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return `Nome do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

class Aluno extends Pessoa {
  // sala: string; // porém tem q colocar assim para ter o this.sala = sala ali em baixo
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // poderia ser assim com public
  ) {
    super(nome, sobrenome, idade, cpf);
    // this.sala = sala; // ou assim
  }

  public getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto(); // super para ter acesso a super classe
    return result;
  }
}

const p1 = new Pessoa('Alex', 'Junio', 18, '111.111.111.11');
const c1 = new Cliente('Kleber', 'Januario', 46, '222.222.222.22');
const a1 = new Aluno('Rosario', 'Batista', 75, '333.333.333.33', '3J');

console.log(p1.getNomeCompleto());
console.log(c1.getNomeCompleto());
console.log('');
console.log(a1);
