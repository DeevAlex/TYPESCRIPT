/*


* DIP - Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.
Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.

Exemplos:

Extremo alto nivel:
uma interface seria de alto nivel, pois, a interface não faz nada, ela só ordena o que outras classes devem fazer

Extremo baixo nivel:
seria uma classe que implementa um método que faz alguma coisa, chama-se classe concreta, pois é ela que faz a tarefa

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
import { EnterpriseCustumer, IndividualCustumer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noDiscount = new NoDiscount();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const d10 = new TeenPercentDiscount();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const d50 = new FiftyPercentDiscount();

const sc = new ShoppingCart(d50);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustumer = new IndividualCustumer(
  'Kleber',
  'Santana',
  '555.555.555-55',
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const enterpriseCustumer = new EnterpriseCustumer(
  'Yamaha Global Eletronics Inc.',
  '5555.4444.8888.1111/55',
);

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messagingMock = new MessagingMock();

messagingMock.sendMessage();

const order = new Order(sc, messagingMock, persistency, individualCustumer);

sc.addItem(new Product('Relogio Digital', 55.1));
sc.addItem(new Product('Tenis', 151.1));
sc.addItem(new Product('RTX 3060 Ti', 3455.1));

console.log(sc.items);
console.log(sc.total());
console.log(sc.totalWithDiscount()); // 10%
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
