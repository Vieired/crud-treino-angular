import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosListaComponent, GenericDialogComponent } from './produtos/produtos-lista/produtos-lista.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ProdutosService } from './produtos/produtos.service';
import { ContatoComponent } from './contato/contato.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavService } from './shared/services/nav.service';
import { DialogOverviewExampleDialog } from '../app/app.component';


@NgModule({
  exports: [ MatListModule, MatIconModule ],
  declarations: [
    GenericDialogComponent, DialogOverviewExampleDialog,
    AppComponent,
    ProdutosComponent,
    ClientesComponent,
    DashboardComponent,
    ProdutosListaComponent,
    ProdutosFormComponent,
    ContatoComponent,
    MenuListItemComponent
  ],
  entryComponents: [GenericDialogComponent, DialogOverviewExampleDialog],
  imports: [
    MatListModule,
    HttpClientModule, // módulo para trabalhar com requisições HTTP.
    ReactiveFormsModule, // necessário para trabalhar com fomrulários reativos (DataDriven)
    NgMultiSelectDropDownModule.forRoot(), // plugin de dropdown multiselect
    FormsModule,
    MatSelectModule,
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
  providers: [ProdutosService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
