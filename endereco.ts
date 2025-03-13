// classe endereco
class Endereco {
    numero: number;
    rua: string;
    bairro: string;
    cidade: string;

    constructor(numero: number, rua: string, bairro: string, cidade: string) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}

export { Endereco };
