// Generics - Introdução aos tipos genéricos

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// nesse qualquer coisa por convenção usasse T ou A, aqui refere-se ao tipo, e é o tipo generico, generics no caso

export function meuFilter<QUALQUERCOISA>(
  array: QUALQUERCOISA[], // meu array aqui vai receber o tipo que estiver ali na função
  callbackfn: FilterCallback<QUALQUERCOISA>,
): QUALQUERCOISA[] {
  const newArray = [];

  // esse for classico tente a ser mais performatico
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => {
  return value < 5;
});

// const arrayFiltrado = meuFilter(array, (value) => value < 5);
const arrayFiltrado = meuFilter<number>(array, (value) => value < 5); // para ser bem mais especifico

console.log(arrayFiltradoOriginal);

console.log(arrayFiltrado);

// resumindo: generics são quando eu não sei exatamente qual tipo de valor eu vou receber, e pode ser usado em varios locais
