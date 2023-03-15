type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

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

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkOut(): void {
    if (this.isEmpty()) {
      console.log('Seu Carrinho Encontra-se Vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage('Seu Pedido Foi Recebido');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem Enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido Salvo...');
  }

  clear(): void {
    console.log('O carrinho de compras foi limpo com sucesso!');
    this._items.length = 0;
  }
}

const sc = new ShoppingCartLegacy();

sc.addItem({ name: 'Relogio Digital', price: 55.1 });
sc.addItem({ name: 'Tenis', price: 151.1 });
sc.addItem({ name: 'RTX 3060 Ti', price: 3455.1 });

console.log(sc.orderStatus);

sc.checkOut();

console.log(sc.items);
console.log(sc.total());
console.log(sc.orderStatus);
