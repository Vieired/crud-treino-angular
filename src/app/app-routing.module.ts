import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ContatoComponent } from './contato/contato.component';
import { TermoComponent } from './paginas/termo/termo.component';
import { HomeComponent } from './paginas/home/home.component';


const routes: Routes = [
  /* Todas as rotas que forem hardcode precisam ser avaliadas primeiro, senão pode dar conflito de rotas. As rotas com id (rotas dinâmicas) como a "produtos/produtosform/:id" precisam ficar por último */
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'termo', component: TermoComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'ProdutosComponent' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'produtos/produtosform/:id', component: ProdutosFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
