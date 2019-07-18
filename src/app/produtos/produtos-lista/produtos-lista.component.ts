import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProdutosService } from '../produtos.service';

export interface PeriodicElement {
  acao: string;
  id: number;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {
  displayedColumns: string[] = ['acao', 'position', 'name', 'weight', 'symbol'];
  dataSource: any;
  produtos: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private produtosService: ProdutosService // injetando o serviço ProdutosService no construtor desta classe ProdutosListaComponent para poder se ultilizar dos métodos deste serviço
    ) { }

  adicionar() {
    let dialogRef = this.dialog.open(GenericDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        titulo: "Adicionar Produto"
      }
    });

    dialogRef.afterClosed().subscribe(x => this.atualizarGrid());    
  }

  editar() {
    this.dialog.open(GenericDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        titulo: "Editar Produto"
      }
    });
  }

  atualizarGrid() {
    debugger;
    this.produtosService.getProdutos();
  }

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.produtos);
    this.dataSource.paginator = this.paginator;
  }

}





@Component({
  // selector: 'app-generic-dialog',
  template: `
    <div class="row">
      <div class="col-10">
          <h2 class="mat-title">{{ data.titulo }}</h2>
      </div>
    </div>
    <div mat-dialog-content>
      <app-produtos-form #appProdutosForm></app-produtos-form>
    </div>
    <div mat-dialog-actions>
      <!--button mat-button (click)="onNoClick()">Cancelar</button-->
      <button mat-raised-button [mat-dialog-close]="true">Cancelar</button>
      <button mat-raised-button color="primary" cdkFocusInitial (click)="appProdutosForm.submeterFormulario()">Salvar</button>
    </div>
  `
})
export class GenericDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    // private produtosLista: ProdutosListaComponent,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}