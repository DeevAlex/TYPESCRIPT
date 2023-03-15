// para usar bibliotecas externas tem que instalar a tipagem e a biblioteca em si assim: npm i <biblioteca> @types/<biblioteca>, porém algumas bibliotecas já vem tipadas

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('alexdematoscaceres@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5]));
