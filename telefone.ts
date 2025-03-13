// classe telefone: armazena as informações de contato
class Telefone {
    ddd: string;
    numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

export { Telefone };
