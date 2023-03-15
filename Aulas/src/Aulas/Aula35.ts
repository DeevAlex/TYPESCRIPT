// Usando chaves com tipos

export type Veiculo = {
  marca: string;
  ano: string;
};

export type Car = {
  brand: Veiculo['marca']; // fazendo o espelhamento do tipo Veiculo no tipo car
  year: Veiculo['ano'];
  name: string;
};

export const carro: Car = {
  brand: 'Ford',
  year: '2017',
  name: 'Dodge Challenger',
};

console.log(carro);
