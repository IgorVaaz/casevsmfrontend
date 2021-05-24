import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Clientes/listar/listar.component';
import { AdicionarComponent } from './Clientes/adicionar/adicionar.component';
import { EditarComponent } from './Clientes/editar/editar.component';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { ListarCidadesComponent } from './Cidades/listar-cidades/listar-cidades.component';
import { AdicionarCidadesComponent } from './Cidades/adicionar-cidades/adicionar-cidades.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AdicionarComponent,
    EditarComponent,
    ListarCidadesComponent,
    AdicionarCidadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
