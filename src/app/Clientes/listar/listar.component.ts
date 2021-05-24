import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidades } from 'src/app/Modelo/Cidades';
import { Clientes } from 'src/app/Modelo/Clientes';
import{ServiceService}from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  cidade:Cidades;
  clientes:Clientes[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    
    this.service.getClientes()
    .subscribe(data=>{
      this.clientes=data;
      this.clientes.forEach(cliente =>{
          cliente.status === true ? cliente.descricaoStatus = "Ativo" : cliente.descricaoStatus = "Inativo";
      })
    })
  }

}
