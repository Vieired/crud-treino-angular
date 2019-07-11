import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosListaComponent, GenericDialogComponent } from './produtos/produtos-lista/produtos-lista.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ProdutosService } from './produtos/produtos.service';

@NgModule({
  declarations: [
    GenericDialogComponent,
    AppComponent,
    ProdutosComponent,
    ClientesComponent,
    DashboardComponent,
    ProdutosListaComponent,
    ProdutosFormComponent
  ],
  entryComponents: [GenericDialogComponent],
  imports: [
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
