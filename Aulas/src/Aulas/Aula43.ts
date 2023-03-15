// Generics com classes (estrutura de dados pilha)

export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  // index signature
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const k in this.elementos) {
      console.log(this.elementos[k]);
    }
  }
}

const p = new Pilha<number>();

p.push(1);
p.push(2);
p.push(3);
p.push(4);

// const elemento1 = p.pop();

p.mostrarPilha();

// console.log('pop', elemento1);

while (!p.isEmpty()) {
  console.log('REMOVIDO: ', p.pop());
}

// esse generics com classe é mais usado quando os valores não e vão ser criados depois de um tempo e não vai conseguir inferir então tem que fazer assim <nome da classe><T - Tipo> e na hora que instanciar colocar o tipo
