// Associação entre classes

export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem uma ferramenta...');
      return;
    }

    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;
  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Machado de Assis');
const caneta = new Caneta('Montblanc Boheme Royal');
const maquinaEscrever = new MaquinaEscrever('Olivetti Linea 88 De 1969');

console.log('Escritor:', escritor.nome);
console.log('Caneta:', caneta.nome);
console.log('Maquina De Escrever:', maquinaEscrever.nome);
escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.ferramenta = null;
escritor.escrever();
