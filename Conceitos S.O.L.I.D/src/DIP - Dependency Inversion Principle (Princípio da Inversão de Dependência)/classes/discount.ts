// aqui nos aplicamos o padrão de projeto Strategy e o polimorfismo

export abstract class Discount {
  protected discount = 0;

  // isso quebra o principio LSP
  // calculate(price: number): unknown {
  //   return price - price * this.discount; // fazer a porcentagem inteira como 50%
  // }

  // isso quebra o principio LSP
  // isso é um erro pois está forçando as subclasses implementem esse metodo
  // calculate(price: number): number {
  //   throw new Error('Not Implemented Error');
  // }

  calculate(price: number): number {
    return price - price * this.discount; // fazer a porcentagem inteira como 50%
  }
}

export class TeenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
  // isso quebra o principio LSP
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // calculate(price: number): string {
  //   return ''; // fazer a porcentagem inteira como 50%
  // }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
  // isso quebra o principio LSP
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // calculate(price: number): boolean {
  //   return !!''; // fazer a porcentagem inteira como 50%
  // }
}

export class NoDiscount extends Discount {
  // isso quebra o principio LSP
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // calculate(price: number): string[] {
  //   return []; // fazer a porcentagem inteira como 50%
  // }

  // uma forma mais sutil de quebrar o LSP
  calculate(price: number): number {
    return price; // fazer a porcentagem inteira como 50%
  }
}
