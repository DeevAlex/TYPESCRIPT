import { Discount } from './discount';
import { CartItem } from './interfaces/cartItem';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((soma, valor) => soma + valor.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('O carrinho de compras foi limpo com sucesso!');
    this._items.length = 0;
  }
}

// Principio da Responsabilidade Unica - Ex: se alguem falar uma frase assim, uma classe deve ter um e apenas um motivo para mudar, o que quer dizer, que minha classe deve ter apenas uma responsabilidade, essa reponsabilidade não é tão facil de saber p que é, porém, coisas que a gente pode entender como responsabilidade são coisas que a gente já está acustumado a ver no programa, como enviar mensagem, persistencia, salvar dados em algum lugar, a regra de negocio no lugar certo, validação, deve ter coesão, essa coesão é quando utuliza o atributo da classe em algum método por exemplo
