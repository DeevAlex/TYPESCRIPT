// Utility Types - Generics padrão no TypeScript

// Tipo Record - Repesenta um objeto, onde você fala o tipo da chave e os tipos dos valores

export const objeto1: Record<string, string | number> = {
  nome: 'Juninho',
  sobrenome: 'Sislenio',
  idade: 22,
};

console.log('OBJETO 1: ', objeto1);

export type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Tipo Required - ele transforma as chaves opcionais de um type ou interface em obrigatórias
export type PessoaRequired = Required<PessoaProtocol>;

// Tipo Partial - ele transforma as chaves obrigatórias de um type ou interface em opcionais
export type PessoaPartial = Partial<PessoaRequired>;

// Tipo Readonly - ele transforma as chaves de um type ou interface em que não podem ser alteradas por fora
export type PessoaReadonly = Readonly<PessoaRequired>;

// Tipo Pick - ele pega somente as chaves que estão como segundo argumento
export type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

// Quando colocar como o tipo aqui vai assumir tudo que estiver nesses tipos acima
export const objeto2: PessoaRequired = {
  nome: 'Alencar',
  sobrenome: 'José Filho',
  idade: 28,
};

console.log('OBJETO 2: ', objeto2);

// Extract e Exclude

export type ABC = 'A' | 'B' | 'C';
export type CDE = 'C' | 'D' | 'E';

// Exclude - Ele computa todos os tipos que estão em ABC que não estão em DEF, ele exclui os tipos repetidos, como o C está se repetindo ele é excluido
export type TipoExclude = Exclude<ABC, CDE>;

// Extract - Ele computa todos os tipos que estão em ABC que podem ser atribuidos ao tipos de CDE, ele exclui o resto que não se repete, como o C está se repedindo então só resta ele
export type TipoExtract = Extract<ABC, CDE>;

// Ex:
export type AccountMongoDB = {
  _id: string;
  nome: string;
  sobrenome: string;
  idade: number;
};

export type AccountApi = Pick<
  AccountMongoDB,
  Exclude<keyof AccountMongoDB, '_id'>
> & {
  id: string;
};

// export type AccountApi = { // Hard Code, Mais trabalho feito a mão
//   id: string;
//   nome: string;
//   idade: number;
// };

export const accountMongo: AccountMongoDB = {
  _id: 'wA8RAWB5BAwa2wabBWR7AB47B9AaB',
  nome: 'Cleison',
  sobrenome: 'Cleison',
  idade: 18,
};

export function mapAccount(accountMongo: AccountMongoDB): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

export const accountApi = mapAccount(accountMongo);

console.log('OBJETO API: ', accountApi);
