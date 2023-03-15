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

import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut(); // sut - system under test, poderia ser outro nome como , class under test
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut(); // sut - system under test, poderia ser outro nome como , class under test
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem Enviada:", and msg', () => {
    const sut = createSut(); // sut - system under test, poderia ser outro nome como , class under test
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem Enviada:', 'teste');
  });
});
