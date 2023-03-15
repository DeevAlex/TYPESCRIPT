// Reference para import de arquivos #1

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="Aula55 module.ts" />

// esse reference é quase que fosse um sistema de modulos do TS, porém é mt melhor o do ES6

// esse metodo de import só funciona com o modo module do tsconfig na configuração AMD ou System não na ES6 ou no commonjs, e tem que configurar o out file inves de outDir

// ou use esse comando: npx tsc <caminho que está importando> --outFile <caminho onde ele será exportado, ou se já estiver na pasta é so colocar um nome nesse arquivo> ele gera meio que um bundle

console.log(MeuNomeSpace.nome);
