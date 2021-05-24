import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidades } from 'src/app/Modelo/Cidades';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adicionar-cidades',
  templateUrl: './adicionar-cidades.component.html',
  styleUrls: ['./adicionar-cidades.component.css']
})
export class AdicionarCidadesComponent implements OnInit {

  adicionarCidades:Cidades;

  constructor(private router:Router, private service:ServiceService) {
 }

  ngOnInit(): void {
  }

  prepararParaGuardarCidade(nomeCidade: String, uf: String){
    this.adicionarCidades = new Cidades(nomeCidade, uf);
    this.salvarCidade(this.adicionarCidades);
  }


  salvarCidade(cidade: Cidades ){
    console.log(this.adicionarCidades);
    this.service.addCidades(this.adicionarCidades).subscribe( value => {
      alert("Cidade adicionada com sucesso!")
      this.router.navigate(["listarCidades"]);
    })
  }

}
