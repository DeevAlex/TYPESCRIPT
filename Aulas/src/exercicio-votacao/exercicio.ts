export type OpcaoVotacao = {
  numeroVotos: number;
  opcao: string;
};

export class Votacao {
  private _opcoesVotacao: OpcaoVotacao[] = [];
  constructor(public detalhes: string) {}

  addVotacao(opcaoVotacao: OpcaoVotacao): void {
    this._opcoesVotacao.push(opcaoVotacao);
  }

  voto(votacaoIndice: number): void {
    if (!this._opcoesVotacao[votacaoIndice]) return;
    this._opcoesVotacao[votacaoIndice].numeroVotos += 1;
  }

  get votacaoOpcoes(): OpcaoVotacao[] {
    return this._opcoesVotacao;
  }
}

export class AppVotacao {
  private votacoes: Votacao[] = [];

  addVotacao(votacao: Votacao): void {
    this.votacoes.push(votacao);
  }

  mostraVotacoes(): void {
    for (const votacao of this.votacoes) {
      console.log(votacao.detalhes);
      for (const votacaoOpcao of votacao.votacaoOpcoes) {
        console.log(votacaoOpcao.opcao, votacaoOpcao.numeroVotos);
      }
      console.log('');
    }
  }
}

const votacao1 = new Votacao('Qual o seu Jogo Favorito?');
votacao1.addVotacao({ opcao: 'GTA V', numeroVotos: 0 });
votacao1.addVotacao({ opcao: 'Valorant', numeroVotos: 0 });
votacao1.addVotacao({ opcao: 'Minecraft', numeroVotos: 0 });
votacao1.addVotacao({ opcao: 'Fortnite', numeroVotos: 0 });
votacao1.addVotacao({ opcao: 'CS:GO', numeroVotos: 0 });
votacao1.voto(2);
votacao1.voto(2);
votacao1.voto(2);
votacao1.voto(2);
votacao1.voto(2);
votacao1.voto(2);

const votacao2 = new Votacao('Qual o seu Filme Favorito?');
votacao2.addVotacao({ opcao: 'Vingadores: Ultimato', numeroVotos: 0 });
votacao2.addVotacao({ opcao: 'Avatar', numeroVotos: 0 });
votacao2.addVotacao({ opcao: 'O Poderoso Chefão', numeroVotos: 0 });
votacao2.addVotacao({ opcao: 'Scarface', numeroVotos: 0 });
votacao2.addVotacao({ opcao: 'O Labirinto do Fauno', numeroVotos: 0 });
votacao2.voto(2);
votacao2.voto(2);
votacao2.voto(2);
votacao2.voto(2);
votacao2.voto(2);
votacao2.voto(2);

const appVotacao = new AppVotacao();

appVotacao.addVotacao(votacao1);
appVotacao.addVotacao(votacao2);
appVotacao.mostraVotacoes();
