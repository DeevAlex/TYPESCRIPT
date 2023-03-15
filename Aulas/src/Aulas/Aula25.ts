// Construtor Privado e singleton - GoF |  Factory Method - GoF

// singleton - para a gente criar somente uma instancia de determinada classe, não mais do que uma
// Factory Method - é um metodo dentro da classe que cria um novo objeto

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {
    //
  }

  connect(): void {
    console.log(
      `Conectado em: ${this.host} com usuario: ${this.user} e com a senha ${this.password}`,
    );
  }

  static getDatabase(host: string, user: string, password: string): Database {
    // Factory Method - GoF
    if (Database.database) {
      console.log('Retornando instancia já criada');
      return Database.database;
    }
    console.log('Criando nova instancia já criada');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456'); // singleton
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();

console.log(db1 === db2);
