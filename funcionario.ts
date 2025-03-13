import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

// classe funcionario
class Funcionario {
    nome: string;
    matricula: string;
    cpf: string;
    endereco: Endereco;
    telefone: Telefone;

    constructor(nome: string, matricula: string, cpf: string, endereco: Endereco, telefone: Telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

export { Funcionario };
