import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Clientes } from '../Modelo/Clientes';
import { Cidades } from '../Modelo/Cidades';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url: string ='http://localhost:8080';

  getClientes(){
    let urlcliente: string = this.Url + "/clientes";
    return this.http.get<Clientes[]>(urlcliente);
  }
  getCidades(){
    let urlcidade: string = this.Url + "/cidades";
    return this.http.get<Cidades[]>(urlcidade);
  }

  addClientes(clientes:Clientes){
    let urlcliente: string = this.Url + "/clientes";
    return this.http.post<Clientes>(urlcliente, clientes);
  }

  addCidades(cidades:Cidades){
    let urlcidade: string = this.Url + "/cidades";
    return this.http.post<Cidades>(urlcidade, cidades);

  }

}
