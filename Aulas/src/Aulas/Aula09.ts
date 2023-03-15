// Tipo Enum
enum Cores { // Quando criar o meu proprio Enum coloca-se a primeira letra maiuscula
  VERMELHO = 1, // 0 - se atribuir um valor a ele, ele comeraçará com esse numero
  AZUL, // 2,
  LARANJA = 5,
}

enum Cores { // se tiver um enum com o mesmo nome e valores diferentes eles se juntaram a um só
  AMARELO, // 2
  ROXO = 'ROXO',
  LILAS = 5,
}

// podemos criar enum com numeros, letras ou numeros e letras - nesse caso tem q especificar o inicializador

function escolhaUmaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaUmaCor(Cores.ROXO);

// console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
