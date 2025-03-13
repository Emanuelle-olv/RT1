import { Funcionario } from "./funcionario";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

// classe empresa: representa uma organização que possui funcionários e telefones
class Empresa {
    funcionarios: Set<Funcionario>;
    endereco: Endereco;
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    telefones: Set<Telefone>;

    constructor(endereco: Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string) {
        this.funcionarios = new Set<Funcionario>();
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.telefones = new Set<Telefone>();
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.add(funcionario);
    }

    adicionarTelefone(telefone: Telefone): void {
        this.telefones.add(telefone);
    }

    imprimirInformacoes(): void {
        console.log(`razão social: ${this.razaoSocial}`);
        console.log(`nome fantasia: ${this.nomeFantasia}`);
        console.log(`cnpj: ${this.cnpj}`);
        console.log(`endereço: ${this.endereco.rua}, nº ${this.endereco.numero}, bairro: ${this.endereco.bairro}, cidade: ${this.endereco.cidade}`);
        
        console.log("\ntelefones:");
        this.telefones.forEach(tel => console.log(`(${tel.ddd}) ${tel.numero}`));

        console.log("\nfuncionários:");
        this.funcionarios.forEach(func => {
            console.log(`nome: ${func.nome}`);
            console.log(`matrícula: ${func.matricula}`);
            console.log(`cpf: ${func.cpf}`);
            console.log(`endereço: ${func.endereco.rua}, nº ${func.endereco.numero}, bairro: ${func.endereco.bairro}, cidade: ${func.endereco.cidade}`);
            console.log(`telefone: (${func.telefone.ddd}) ${func.telefone.numero}\n`);
        });
    }
}

export { Empresa };
