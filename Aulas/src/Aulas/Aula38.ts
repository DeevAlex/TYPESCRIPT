// Encadeamento opcional e Operador de coalescência nula

export type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

export const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

// no operação nula ele vai checar o do lado esquerdo se for um não valor executa o que está no lado direito
console.log(documento.data?.toLocaleString() ?? 'Ixi, não existe data'); // operador opcional - ?, o de coalescência - ??

// Não valores
console.log(undefined ?? 'Teste Undefined'); // Mostra Undefined
console.log(null ?? 'Teste Null'); // Mostra Teste Null

// Falsy
console.log(false ?? 'Teste False'); // Mostra false
console.log(0 ?? 'Teste 0'); // Mostra 0
console.log('' ?? `Teste ''`); // Mostra ''

// Não valores: null e undefined
