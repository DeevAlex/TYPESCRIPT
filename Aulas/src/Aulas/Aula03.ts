// Tipo void - quer dizer que uma função ou método não retorna nada

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

// const pessoa1 = {
//   nome: 'Alex',
//   sobrenome: 'Antonio',
//   exibirNome(): void {
//     console.log(this.nome + ' ' + this.sobrenome);
//   },
// };

semRetorno('Olá', 'Oi');
// pessoa1.exibirNome();
