// Super - para acesso à super classe

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string, // passando daqui
  ) {
    this.cpf = _cpf; // passando direto no setter, dai vai ter duas chamadas, pq foi chamado no construtor na instancia e dps chamou dnv para alterar o valor
  }

  set cpf(cpf: string) {
    // quando faz esse tipo de getter e setter precisa-se por convenção colocar um _  antes ali no atributo: _cpf
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    // o set e o get se conportam como o atributos da classe
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, ''); // se aqui tiver o this.cpf vai gerar um erro Maximum call stack size exceeded pois ele está chamando ele mesmo e dai gera esse erro por isso coloca-se o _cpf que arruma ele
  }
}

const p1 = new Pessoa('Alex', 'Junio', 18, '111.111.111.11');
p1.cpf = '123.456.789-10'; // quando usa o = ele chama o metodo set cpf
console.log(p1.cpf);
