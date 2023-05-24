"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gato {
    constructor(name, idade, raca) {
        this.name = name;
        this.idade = idade;
        this.raca = raca;
    }
    imprimi() {
        console.log(`O ${this.name} da raça ${this.raca} tem ${this.idade} anos`);
    }
}
const Antony = new Gato('Antony', 8, 'Caramelo');
Antony.imprimi();
