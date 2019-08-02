import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/produtosform/:id', component: ProdutosFormComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'ProdutosComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
