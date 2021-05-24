export class Cidades{
    cidadeId:number;
    nomeCidade:String;
    uf:String;

    constructor(nomeCidade: String, uf: String){
        this.nomeCidade = nomeCidade;
        this.uf = uf;
    }

}