import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injeção de dependencia
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkOut(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu Carrinho Encontra-se Vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage('Seu Pedido Foi Recebido');
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
