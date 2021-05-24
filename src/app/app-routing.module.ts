import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarCidadesComponent } from './Cidades/adicionar-cidades/adicionar-cidades.component';
import { ListarCidadesComponent } from './Cidades/listar-cidades/listar-cidades.component';
import { AdicionarComponent } from './Clientes/adicionar/adicionar.component';
import { EditarComponent } from './Clientes/editar/editar.component';
import { ListarComponent } from './Clientes/listar/listar.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'adicionar', component:AdicionarComponent},
  {path: 'editar', component:EditarComponent},
  {path: 'listarCidades', component:ListarCidadesComponent},
  {path: 'adicionarCidades', component:AdicionarCidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
