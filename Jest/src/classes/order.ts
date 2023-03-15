import { OrderStatus } from './interfaces/order-status';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injeção de dependencia
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
