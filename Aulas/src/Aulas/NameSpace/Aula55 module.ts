// Criando um namespace

/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNomeSpace {
  export const nome = 'Alex';

  export class PessoaDoNameSpace {
    constructor(public nome: string) {}
  }

  // const p = new PessoaDoNameSpace('Alex');

  export namespace OutroNameSpace {
    export const nomeDoOutroNameSpace = 'Juliano';
  }
}

// para usar as coisas que estão dentro do namespace tem que exportar e usar o nome do NameSpace para poder ter acesso

const p = new MeuNomeSpace.PessoaDoNameSpace('Alex');
console.log(MeuNomeSpace.OutroNameSpace.nomeDoOutroNameSpace);
console.log(MeuNomeSpace.nome);
console.log(p);
