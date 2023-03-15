// esse declaration file tem que estar no global para termos acesso ao namespace que estaram criados aqui

declare namespace _ {
  // essa interface tem que ter o mesmo nome que estiver lá porem muda de biblioteca para biblioteca
  interface LoDashStatic {
    // aqui pode atrelar mais coisas que funcionam
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MINHAGLOBAL: string;
  }
}
