import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidades } from 'src/app/Modelo/Cidades';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-cidades',
  templateUrl: './listar-cidades.component.html',
  styleUrls: ['./listar-cidades.component.css']
})
export class ListarCidadesComponent implements OnInit {

  cidades:Cidades[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCidades()
    .subscribe(data=>{
      this.cidades=data;
    })
  }

}
