// Tipo Never
function criaErro(): never {
  // never nunca vai retornar nada, pode ser usado em laço infinito, a função nunca retorna, ou um erro que é o mais comum
  throw new Error('Erro Qualquer');
}

criaErro();
