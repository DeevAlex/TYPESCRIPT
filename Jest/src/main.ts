/*


* ISP - Interface Segregation Principle (Princípio da Segregação de Interface) - os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam

*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TeenPercentDiscount,
} from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noDiscount = new NoDiscount();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const d10 = new TeenPercentDiscount();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const d50 = new FiftyPercentDiscount();

const sc = new ShoppingCart(d50);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustumer = new IndividualCustomer(
  'Kleber',
  'Santana',
  '555.555.555-55',
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const enterpriseCustumer = new EnterpriseCustomer(
  'Yamaha Global Eletronics Inc.',
  '5555.4444.8888.1111/55',
);
const order = new Order(sc, messaging, persistency, individualCustumer);

sc.addItem(new Product('Relogio Digital', 55.1));
sc.addItem(new Product('Tenis', 151.1));
sc.addItem(new Product('RTX 3060 Ti', 3455.1));

console.log(sc.items);
console.log(sc.total());
console.log(sc.totalWithDiscount()); // 10%
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
