// composição entre classes

export class Carro {
  private readonly motor: Motor = new Motor(); // esse aqui é a relação de composição, dai não precisa instanciar fora da classe
  ligar(): void {
    this.motor.ligar(); // é so usar o this que será disponibilizado os metodos do Motor
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligando...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parando...');
  }

  desligar(): void {
    console.log('Motor está desligando...');
  }
}

const carro = new Carro();

carro.ligar();

console.log();
