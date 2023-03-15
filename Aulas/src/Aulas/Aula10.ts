// Tipo Unknown

// o Unknown é um pouco mais seguro do que o any

// let x: any;
// x = 100;
// x = 'Alex';
// x = 900;
// x = '10';
// const y = 800;
// console.log(x + y);

let x: unknown;
x = 100;
x = 'Alex';
x = 900;
x = '10';
const y = 800;

if (typeof x === 'number') console.log(x + y); // tem que fazer essa checagem que dai o erro some
