// Herança

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

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
  public getNomeCompleto(): string {
    return `Nome do Aluno: ${this.nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa('Alex', 'Junio', 18, '111.111.111.11');
const c1 = new Cliente('Kleber', 'Januario', 46, '222.222.222.22');
const a1 = new Aluno('Rosario', 'Batista', 75, '333.333.333.33');

console.log(p1.getNomeCompleto());
console.log(c1.getNomeCompleto());
console.log(a1.getNomeCompleto());
