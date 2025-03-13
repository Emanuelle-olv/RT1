import { Empresa } from "./empresa";
import { Funcionario } from "./funcionario";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

// criando um endereço para a empresa
let enderecoEmpresa = new Endereco(123, 'av. paulista', 'jardim paulista', 'são paulo');

// criando telefones
let telefone1 = new Telefone('011', '9-9999-9999');
let telefone2 = new Telefone('011', '9-8888-8888');

// criando funcionários
let funcionario1 = new Funcionario('tony stark', '123456789', '999.999.999-99', enderecoEmpresa, telefone1);
let funcionario2 = new Funcionario('steve rogers', '987654321', '888.888.888-88', enderecoEmpresa, telefone2);

// criando a empresa
let empresa = new Empresa(enderecoEmpresa, 'abc ltda', 'mercado online', '999-999-999-999-99');

// adicionando funcionários e telefones a empresa
empresa.adicionarFuncionario(funcionario1);
empresa.adicionarFuncionario(funcionario2);
empresa.adicionarTelefone(telefone1);
empresa.adicionarTelefone(telefone2);

// imprimindo informações da empresa
empresa.imprimirInformacoes();
