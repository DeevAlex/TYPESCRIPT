import { PersistencyProtocol } from '../classes/interfaces/Persistency-Protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido Salvo...');
  }
}
