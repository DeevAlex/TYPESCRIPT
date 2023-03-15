//  Modificadores de acesso public e private

// se não especificar o se é publico, protegido ou privado, ele será sempre publico

// public - é acessivel dentro da classe, fora da classe e em todas as subclasses, e se não for readonly pode atribuir valores as mesmas
// private - só é acessivel dentro da clase, é execelente para encapsulamento, utiliza-se metodos para disponibilizar coisas que estão aqui dentro

export class Empresa {
  public readonly nome: string; // aqui no public faz com que ao instanciar a class o autocomplete mostra os atributos que são publicos
  protected readonly cnpj: string;
  private readonly funcionarios: Funcionario[] = []; // nesse caso se tiver readonly assim readonly Funcionario[] = [] os métodos não são disponiveis

  constructor(nome: string, cnpj: string) {
    this.nome = nome; // aqui funciona sem erros pq ali em cima foi iniciado parcialmente e aqui completa atribuindo o valor, e atribuido nao pode ser mudado
    this.cnpj = cnpj;
  }

  public adicionaFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }

  public mostrarFuncionarios(): void {
    this.funcionarios.forEach((funcionario) => console.log(funcionario));
  }

  public getNome(): string {
    // aqui o public é redundante, não precisa, porém ali no atalho precisa informar
    return this.nome;
  }
}

export class Funcionario {
  constructor(
    // se usar o atalho vai ser preciso colocar o public se não haverá erro
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {} // aqui vai precisar informar se public ou outros
}

const empresa1 = new Empresa('WebBuilders', '5481.4455.7889.1141.6784/5712');
const funcionario1 = new Funcionario('Jilson', 'Junio Silveria');
const funcionario2 = new Funcionario('Maria', 'Caetano Pereira');
const funcionario3 = new Funcionario('Luiz', 'Silvano Otaviano');

empresa1.adicionaFuncionario(funcionario1);
empresa1.adicionaFuncionario(funcionario2);
empresa1.adicionaFuncionario(funcionario3);

empresa1.mostrarFuncionarios();
