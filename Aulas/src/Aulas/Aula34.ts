// keyof e typeof

type CoresObj = typeof coresObj; // pegando o tipo completo de coresObj
type CoresChaves = keyof CoresObj; // pegando as todas as chaves que existirem no CoresObj

export const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
  ciano: 'cyan',
};

export function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
