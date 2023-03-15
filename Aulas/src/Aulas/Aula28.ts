// Agregação entre classes

export class CarrinhoCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce(
      (soma, produto) => Number((soma + produto.preco).toFixed(2)),
      0,
    );
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {
    //
  }
}

const produto1 = new Produto('Bolacha Bauduco', 1.75879);
const produto2 = new Produto('Salgadinho Doritos', 17.754987);
const produto3 = new Produto('Caixa de Chicletes Baba de Bruxa', 5.869);

const carrinho = new CarrinhoCompras();

carrinho.inserirProdutos(produto1, produto2, produto3);
console.log(carrinho);
console.log(carrinho.quantidadeProdutos());
console.log(carrinho.valorTotal());
