// describe('Testando Alguma Coisa', () => {
//   test(`shouldn't return Alex`, () => {
//     const nome = 'Alexx';
//     expect(nome).not.toBe('Alex');
//   });
// });

// describe('Testando Alguma Coisa', () => {
//   it('should return 1', () => {
//     const number = 1;
//     expect(number).toBe(1);
//   });
// });

// test(); é a mesma coisa de it

import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = new Persistency(); // sut - system under test, poderia ser outro nome como , class under test
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency(); // sut - system under test, poderia ser outro nome como , class under test
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido Salvo..."', () => {
    const sut = new Persistency(); // sut - system under test, poderia ser outro nome como , class under test
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido Salvo...');
  });
});
