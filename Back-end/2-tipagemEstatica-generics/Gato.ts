class Gato {
  name: string;
  idade: number;
  raca: string;

  constructor(name: string, idade: number, raca: string) {
    this.name = name;
    this.idade = idade;
    this.raca = raca;
  }

  imprimi(): void {
    console.log(`O ${this.name} da raça ${this.raca} tem ${this.idade} anos`);
  }
}

const Antony = new Gato('Antony', 8, 'Caramelo');

Antony.imprimi();
