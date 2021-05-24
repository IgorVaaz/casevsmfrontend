import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cidades } from 'src/app/Modelo/Cidades';
import { Clientes } from 'src/app/Modelo/Clientes';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  clientes: Clientes;
  cidades: Cidades[];
  clienteAdicionar:Clientes;

  constructor(private router:Router, private service:ServiceService) {
   }

  ngOnInit(): void { 
    this.service.getCidades()
    .subscribe(data=>{
      this.cidades=data;        
    })
    }

    onSubmit(){
      this.guardar(this.clienteAdicionar);
    }

    guardar(cliente: Clientes){
      console.log(this.clienteAdicionar);
    this.service.addClientes(this.clienteAdicionar).subscribe( value => {
      alert("Cliente adicionada com sucesso!")
      this.router.navigate(["listar"]);
    })
  }
    

  // prepararParaGuardar(nome: String, cpf: String, email: String, bairro: String, endereco: String, telefone: String, cep:String, status:String, nomecidade: any){
  //   console.log(this.clienteAdicionar);
  //   let ok: boolean;
  //   if(status==="true"){
  //     ok = true;
  //   } else ok = false;

  //   this.clientes = new Clientes(nome, cpf, email, bairro, endereco, telefone, cep, ok, nomecidade);
  //   this.guardar(this.clientes);
  // }

  
}
