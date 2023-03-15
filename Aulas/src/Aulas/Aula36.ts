// Usando this como tipo

export class Calculadora {
  constructor(public number: number) {}

  // o this nesse caso permite fazer chamadas em cadeia porque está sendo retornado o proprio this
  add(n: number): this {
    // aqui eu estou retornando a proporia instancia
    this.number += n;
    return this;
  }
  sub(n: number): this {
    // aqui eu estou retornando a proporia instancia
    this.number -= n;
    return this;
  }
  div(n: number): this {
    // aqui eu estou retornando a proporia instancia
    this.number /= n;
    return this;
  }
  mul(n: number): this {
    // aqui eu estou retornando a proporia instancia
    this.number *= n;
    return this;
  }
}

export class subCalculadora extends Calculadora {
  // só que nesse caso o this vai referenciar para a class subcalculadora e dai tem q instanciar ele para poder ter acesso aos metodos da classe extendida que é a calculadora e assim poder efetuar os calculos
  pow(n: number): this {
    // aqui eu estou retornando a proporia instancia
    this.number **= n;
    return this;
  }
}

// Padrão de projeto da GoF - Builder

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

export const calculadora = new subCalculadora(10);
const requestBuilder = new RequestBuilder(); // Builder

requestBuilder.setUrl('https://www.google.com').setMethod('post').send();

console.log(calculadora.add(5).mul(2).div(2).sub(5).pow(2));
console.log(requestBuilder);
