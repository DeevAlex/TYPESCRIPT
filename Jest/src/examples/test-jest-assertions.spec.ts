describe('Primitive Values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10, 1); // checagem de valores proximos, (<numero>, 'casas decimais')
    expect(number).toBeCloseTo(9.996, 1);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString'); // checa se uma propriedade existe dentro de number
  });

  it('should split tests', () => {
    const number = 10;
    expect(number).toBe(10.0);
    expect(number).toEqual(10.0);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);
  });
});

describe('Objects', () => {
  it('should test jest assertions with Objects', () => {
    const person = { name: 'Alex', age: 19 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age'); // checa person tem chave, valor
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 19); // checa person tem chave, valor

    expect(person.name).toBe('Alex');
  });
});
