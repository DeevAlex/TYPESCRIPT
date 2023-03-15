// aqui nos aplicamos o padrão de projeto Strategy e o polimorfismo

export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * this.discount; // fazer a porcentagem inteira como 50%
  }
}

export class TeenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class NoDiscount extends Discount {}
