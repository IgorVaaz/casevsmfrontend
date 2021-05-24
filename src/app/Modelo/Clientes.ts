import { Cidades } from "./Cidades";

export class Clientes{
    clienteId:String;
    nome:String;
    telefone:String;
    //cidade_id: number;
    cpf:String;
    email:String;
    bairro:String;
    endereco:String;
    numero:number;
    cep:String;
    status:boolean;
    descricaoStatus:String;
    cidade:Cidades;
    cidadeId:number;

    // constructor(nome: String, cpf: String, email: String, bairro: String, endereco: String, telefone: String, cep:String, status:boolean, nomecidade:any){
    //     this.nome = nome;
    //     this.cpf = cpf;
    //     this.email = email;
    //     this.bairro = bairro;
    //     this.endereco = endereco;
    //     this.telefone = telefone;
    //     this.cep = cep;
    //     this.status = status;
    //     this.cidade.cidadeId = nomecidade;
    // }
}