// Tipo tuple

//                      tuple
const dadosClient1: readonly [number, string] = [1, 'Alex'];
const dadosClient2: [number, string, string] = [1, 'Alex', 'Suarez'];
const dadosClient3: [number, string, string?] = [1, 'Alex', 'Eduardo'];
const dadosClient4: [number, string, ...string[]] = [1, 'Alex', 'Eduardo'];

// dadosClient1[0] = 5;
// dadosClient1[1] = 'Carlos';

// dadosClient1.pop(); caso tenha readonly não pode usar esses metodos

console.log(dadosClient1);
console.log(dadosClient2);
console.log(dadosClient3);
console.log(dadosClient4);

// ReadOnly
const array1: readonly string[] = ['A', 'B', 'C'];
const array2: ReadonlyArray<string> = ['4', '5', '6'];

console.log(array1);
console.log(array2);
