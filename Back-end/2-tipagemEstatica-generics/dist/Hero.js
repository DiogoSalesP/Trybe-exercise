"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hero {
    constructor(nome, poder) {
        this._nome = nome;
        this._poder = poder;
    }
    falarFraseInspiradora(frase) {
        return `${this._nome} diz: ${frase}`;
    }
}
const Hero1 = new Hero('Martin Luther King', 'Dar exemplo');
const Hero2 = new Hero('Nina Simone', 'Dar exemplo');
console.log(Hero1.falarFraseInspiradora('“Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo”'));
console.log(Hero2.falarFraseInspiradora('“Eu te digo o que a liberdade significa para mim: não ter medo.”'));
