interface Hero {
  _nome: string;
  _poder: string;
  falarFraseInspiradora(frase: string): string
}

class Hero {
  _nome: string;
  _poder: string;

  constructor(nome: string, poder: string) {
    this._nome = nome;
    this._poder = poder;
  }

  falarFraseInspiradora(frase: string): string {
    return `${this._nome} diz: ${frase}`
  }

}

const Hero1 = new Hero('Martin Luther King', 'Dar exemplo');
const Hero2 = new Hero('Nina Simone', 'Dar exemplo');

console.log(Hero1.falarFraseInspiradora('“Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo”'));
console.log(Hero2.falarFraseInspiradora('“Eu te digo o que a liberdade significa para mim: não ter medo.”'));

