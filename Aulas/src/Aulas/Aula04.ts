// Objeto

//                     tipo   qualquer valor
// const ObjetoA: Record<string, unknown> = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

const ObjetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string; // assim ou
  [key: string]: unknown; // quase a mesma forma do Record // Assim
} = {
  chaveA: '',
  chaveB: '',
};

ObjetoA.chaveC = 'Outro Valor';
ObjetoA.chaveD = 'Outro Valor';

// para não alterar o valor da chave existente coloque readonly seria como um const

console.log(ObjetoA);
