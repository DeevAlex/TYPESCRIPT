import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const sc = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(sc, messaging, persistency);

sc.addItem(new Product('Relogio Digital', 55.1));
sc.addItem(new Product('Tenis', 151.1));
sc.addItem(new Product('RTX 3060 Ti', 3455.1));

console.log(order.orderStatus);

order.checkOut();

console.log(sc.items);
console.log(sc.total());
console.log(order.orderStatus);
