// interfaces - geralmente são usadas para modelar objetos
// na interface para modelar a forma precisa abrir as {} e na forma tem que ter chave e tipo
// na type alias tem "mais" vantegem em relação as interfaces pois não tem restrição: <type> = <type> & <type> & <type>
// na interface tem uma restrição a mais porém conseguimos suprir essa restrição extentendo mais de uma interface: extends <interface>,<interface>

interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto; // assim ou desse outro jeito de baixo
interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// se quiser implementar em um objeto, tem que ter as mesmas coisas que estão nas interfaces, se não gera um erro

export const pessoaObj: TipoPessoa = {
  nome: 'Josévaldo',
  sobrenome: 'Siqueira',
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  },
};

export const pessoa = new Pessoa('Jusvenio', 'Silveira');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
