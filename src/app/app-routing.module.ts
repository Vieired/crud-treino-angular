import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
