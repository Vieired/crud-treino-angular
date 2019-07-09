import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ClientesComponent,
    DashboardComponent,
    ProdutosListaComponent
  ],
  imports: [
    MatGridListModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
