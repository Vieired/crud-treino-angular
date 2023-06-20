import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ContatoComponent } from './contato/contato.component';
import { TermoComponent } from './paginas/termo/termo.component';


const routes: Routes = [
  /* Todas as rotas que forem hardcode precisam ser avaliadas primeiro, senão pode dar conflito de rotas. As rotas com id (rotas dinâmicas) como a "produtos/produtosform/:id" precisam ficar por último */
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'termo', component: TermoComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'ProdutosComponent' },
  { path: '', pathMatch: 'full', redirectTo: 'produtos' },
  { path: 'produtos/produtosform/:id', component: ProdutosFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
