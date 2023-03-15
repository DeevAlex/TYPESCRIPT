// implementando type alias em classes

type TipoNome = {
  // esses tipos serão uma interace para outras pessoas possam conhecer esses tipos, aqui não vai ter public, protected e privated
  // o proposito é desses tipos e de interface é de expor coisas para fora da classe, pra falar o que a clase tem
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  // e se implementar um tipo ou uma interface e não colocar o que tem lá vai ficar com erro
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Jusvenio', 'Silveira');
console.log(pessoa.nomeCompleto());
