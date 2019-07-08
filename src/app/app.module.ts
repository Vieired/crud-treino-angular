import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ClientesComponent,
    DashboardComponent,
    MenuLateralComponent
  ],
  imports: [
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
