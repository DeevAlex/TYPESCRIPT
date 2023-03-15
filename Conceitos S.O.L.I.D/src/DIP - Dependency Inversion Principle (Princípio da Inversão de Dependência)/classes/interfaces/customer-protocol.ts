// a gente não deve criar interfaces muito infladas, com muitas coisas, pois a gente começa a quebrar o principio ISP, fazendo com que outras classes sejam obrigadas a implementar coisas que elas não vão utilizar como nesses exemplos abaixo:
export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustumerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
