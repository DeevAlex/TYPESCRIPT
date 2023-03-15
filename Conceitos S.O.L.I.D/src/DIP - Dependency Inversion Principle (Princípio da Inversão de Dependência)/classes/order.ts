import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injeção de dependencia
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkOut(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu Carrinho Encontra-se Vazio');
      return;
    }
    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
    this._orderStatus = 'closed';
    this.messaging.sendMessage('Seu Pedido Foi Recebido');
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
