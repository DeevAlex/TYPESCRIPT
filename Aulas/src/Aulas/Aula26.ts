// Abstract

// usando abstract não pode ser mais instanciada diretamente: new Personagem(); assim não pode, só pode instanciar através de subclasses

export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected danoAtaque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.nome} está atacando`);
    personagem.perderVida(this.danoAtaque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} está com ${this.vida} de vida`);
  }

  abstract bordao(): void; // aqui não pode ter corpo, pq é so um contrato, nas outras subclasses devem ter o mesmo retorno e precisa ter o metodo
}

export class Guerreira extends Personagem {
  // classe concreta
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ' Te curando');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + ' ARRRRRRHHHH');
  }
}

const guerreira = new Guerreira('Sage', 150, 1000);
const monstro = new Monstro('Monstro', 150, 1000);

guerreira.atacar(monstro);
guerreira.bordao();
monstro.atacar(guerreira);
monstro.bordao();
