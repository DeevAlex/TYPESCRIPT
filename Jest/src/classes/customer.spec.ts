import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Alex', 'Silveira', '578.555.555-55');
    expect(sut).toHaveProperty('firstName', 'Alex');
    expect(sut).toHaveProperty('lastName', 'Silveira');
    expect(sut).toHaveProperty('cpf', '578.555.555-55');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Alex', 'Silveira', '578.555.555-55');
    expect(sut.getName()).toBe('Alex Silveira');
    expect(sut.getIDN()).toBe('578.555.555-55');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '578.555.555-55');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '578.555.555-55');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '578.555.555-55');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('578.555.555-55');
  });
});
