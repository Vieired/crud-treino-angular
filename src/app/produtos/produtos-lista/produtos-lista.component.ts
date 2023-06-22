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
    localStorage.setItem('usandoModal', JSON.stringify(true));
    // localStorage.setItem('produtoEmEdicao', JSON.stringify(null));
    let dialogRef = this.dialog.open(GenericDialogComponent, {
      // height: '400px',
      width: '600px',
      data: {
        titulo: "Adicionar Produto",
        // dadosItem: null
      }
    });

    dialogRef.afterClosed().subscribe(x => {
      this.atualizarGrid();
      this.limparProdutoDoStorage()
    });
    // alert("Registro Adicionado com Sucesso.");
  }

  editar(element: Produto) {
    localStorage.setItem('usandoModal', JSON.stringify(true));
    localStorage.setItem('produtoEmEdicao', JSON.stringify(element));
    let dialogRef = this.dialog.open(GenericDialogComponent, {
      // height: '400px',
      // maxHeight: '400px',
      width: '600px',
      data: {
        titulo: "Editar Produto",
        // dadosItem: element
      }
    });

    dialogRef.afterClosed().subscribe(x => 
      this.limparProdutoDoStorage()
    );
  }

  atualizarGrid() {
    // debugger;
    this.produtosService.getProdutos();
  }

  limparProdutoDoStorage() {
    localStorage.removeItem('produtoEmEdicao');
    localStorage.setItem('usandoModal', JSON.stringify(false));
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
      <br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio tortor, tempor et maximus semper, egestas scelerisque ipsum. Suspendisse eu tellus fermentum, consectetur eros ut, maximus mi. Etiam tempor urna ut augue molestie, ut porttitor velit luctus. Pellentesque vulputate consequat arcu, vel cursus quam tincidunt ut. Quisque vitae nulla at elit consectetur condimentum. Nulla sed massa purus. Phasellus ornare, orci vitae consectetur vestibulum, velit tortor mattis purus, non luctus magna nisi non risus. Nulla purus lectus, tempus sit amet sapien eget, dapibus cursus lacus. Integer leo diam, semper egestas magna eu, porta semper orci. In a fringilla dolor. Nam et felis tempus, lacinia erat ac, dictum lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      <p>Nulla sit amet erat facilisis, feugiat sem in, suscipit tellus. In non tempor ex. Nulla sed augue iaculis nisl feugiat varius eget ac lectus. Etiam quis mauris dolor. Sed nisi libero, scelerisque quis molestie sed, venenatis eget lacus. Aliquam vel bibendum enim. Proin efficitur ut felis id ultricies. Nam in egestas ipsum, ac interdum mi. Quisque vitae semper velit. Donec mollis est nulla, vel varius urna tempus ac. Donec congue orci non dolor mattis interdum. Fusce vel urna id leo auctor pulvinar. Proin a nulla eget felis congue suscipit et in metus.</p>
      <p>Ut viverra ipsum lacus, et imperdiet nibh mollis non. Vestibulum vitae iaculis enim, eu sollicitudin urna. Nam lacus quam, dictum id leo quis, dignissim varius nibh. Proin pretium orci in venenatis finibus. Proin rhoncus eleifend augue in maximus. Proin risus nisi, egestas ac purus ac, interdum dapibus neque. Donec ultrices orci id mauris tincidunt, a imperdiet nisi suscipit.</p>
    </div>
    <div mat-dialog-actions>
      <!--button mat-button (click)="onNoClick()">Cancelar</button-->
      <button mat-raised-button [mat-dialog-close]="true">Cancelar</button>
      <button
        mat-raised-button
        color="primary"
        cdkFocusInitial
        (click)="appProdutosForm.submeterFormulario()"
        [disabled]="!appProdutosForm.formulario.valid"
      >
        Salvar
      </button>
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