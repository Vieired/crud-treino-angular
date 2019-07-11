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

const ELEMENT_DATA: PeriodicElement[] = [
  {acao:null, id: 20, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {acao:null, id: 19, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {acao:null, id: 18, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {acao:null, id: 17, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {acao:null, id: 16, position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {acao:null, id: 15, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {acao:null, id: 14, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {acao:null, id: 13, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {acao:null, id: 12, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {acao:null, id: 11, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {acao:null, id: 10, position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {acao:null, id: 9, position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {acao:null, id: 8, position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {acao:null, id: 7, position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {acao:null, id: 6, position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {acao:null, id: 5, position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {acao:null, id: 4, position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {acao:null, id: 3, position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {acao:null, id: 2, position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {acao:null, id: 1, position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'}
];

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {
  displayedColumns: string[] = ['acao', 'position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
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
  }

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.produtos);
    this.dataSource.paginator = this.paginator;
  }

}





@Component({
  selector: 'app-generic-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.titulo }}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <input matInput>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button cdkFocusInitial>Ok</button>
    </div>
  `
})
export class GenericDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}