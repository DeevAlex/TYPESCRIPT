/*

Φ - phi symbol

Liskov Substitution Principle (Princípio da Substituição de Liskov) - se Φ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então Φ(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Simplificando: subtipos precisam ser substituiveis por seus tipos de base.
Simplificando ainda mais: Se meu programa espera Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal


*

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noDiscount = new NoDiscount();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const d10 = new TeenPercentDiscount();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const d50 = new FiftyPercentDiscount();

const sc = new ShoppingCart(d50);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(sc, messaging, persistency);

sc.addItem(new Product('Relogio Digital', 55.1));
sc.addItem(new Product('Tenis', 151.1));
sc.addItem(new Product('RTX 3060 Ti', 3455.1));

console.log(sc.items);
console.log(sc.total());
console.log(sc.totalWithDiscount()); // 10%
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
