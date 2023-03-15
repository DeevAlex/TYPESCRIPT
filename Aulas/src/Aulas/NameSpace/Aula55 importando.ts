import { soma } from './modulo.js';

const resultado = soma(5, 15) as number;
console.log(resultado);

// para permitir o import do ES6 tem que habilitar no tsconfig: allowJS: true
