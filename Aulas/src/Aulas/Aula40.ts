// Array e Promises são generics

type MeuTipo1 = number;
type MeuTipo2 = string;

// const ArrayNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; assim ou
const ArrayNumeros: Array<MeuTipo1> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // assim

console.log(ArrayNumeros);

async function promiseAsync() {
  return 1;
}

// nesse caso aqui o tipo ali tem q ser o mesmo que estiver no resolve se não da erro de tipo
function minhaPromise(): Promise<MeuTipo2> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Meu numero é 5');
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado));
minhaPromise().then((resultado) => console.log(resultado));
