import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { GenericDialogComponent, ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  public tituloPagina: string = "Produtos"
  private itensBreadcrumb: ItensBreadcrumb[] = [
    { nome: this.tituloPagina, caminho: ''},
  ];
  public PRODUTOS: Produto[] = [];
  // private inscricao: Subscription;

  tiles: any[] = [
    {text: 'Um', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Dois', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Três', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Quatro', cols: 2, rows: 1, color: '#DDBDF1'}
  ];

  constructor(
    private produtosService: ProdutosService,
    // private produtosListaComponent: ProdutosListaComponent,
    // private _dialogRef: MatDialogRef<ProdutosListaComponent>
  ) { }

  atualizarGrid() {
    this.produtosService.listarProdutos();
  }

  obterNovoId() {
    // let aux = [];
    // for(let i=0 ; i<this.PRODUTOS.length ; i++) {
    //   aux.push( this.PRODUTOS[i].id );
    // }
    // return Math.max.apply(null, aux) + 1;
    return 55;
  }

  obterNovoPosition() {
    // let aux = [];
    // for(let i=0 ; i<this.PRODUTOS.length ; i++) {
    //   aux.push( this.PRODUTOS[i].position );
    // }
    // return Math.max.apply(null, aux) + 1;

    return 56;
  }

  inserirOuAtualizar(produto: Produto) {
    debugger;
    // se o produto tem id 0, então adicione ele como um novo registro
    if(!produto.id || produto.id == 0) {
      // this.produtosService.adicionarProduto(produto);

      this.produtosService.adicionarProduto(produto)
        .subscribe((response: any) => {
          console.log(response);
          this.atualizarGrid();
          alert("Registro adicionado com sucesso.");
          // this.produtosListaComponent.dialog.closeAll();
          // this._dialogRef.close();
        });
        // .subscribe({
        //   next: (response: any) => {
        //     console.log(response)
        //   },
        //   error: (err: any) => {
        //     console.log('ERRO! ', err)
        //   }
        // });

      // const inscricao = this.produtosService.adicionarProduto(produto);
      // this.inscricao.tap(response => {
      //   console.table("Response: ", response)
      // });
    }
    // se o produto tem id maior que 0 então atualize ele
    else {
      this.produtosService.setProduto(produto)
        // .subscribe((response: any) => {
        //   console.log(response);
        //   // this.produtosListaComponent.dialog.closeAll();
        // });      
        .subscribe({
          next: (response: any) => {
            console.log(response);
            this.atualizarGrid();
            alert("Registro atualizado com sucesso.");
            // this.produtosListaComponent.dialog.closeAll();
            // this._dialogRef.close();
          },
          error: (err: any) => console.log('ERRO! ', err)
        });
    }
  }

  // inserirOuAtualizar(produto: Produto) {
  //   debugger;
  //   // se o produto tem id 0, então adicione ele como um novo registro
  //   if(!produto.id || produto.id == 0) {
  //     let aux = {
  //       acao: null, 
  //       id: this.obterNovoId(), 
  //       position: this.obterNovoPosition(), 
  //       name: produto.name, 
  //       weight: 1.0079, 
  //       symbol: produto.symbol
  //     };
  //     this.PRODUTOS.push(aux);
  //     console.table(aux);
  //     // alert("Registro Adicionado com Sucesso.");
  //   }
  //   // se o produto tem id maior que 0 então atualize ele
  //   else {
  //     for(let i=0 ; i<this.PRODUTOS.length ; i++) {
  //       if(this.PRODUTOS[i].id == produto.id) {
  //         this.PRODUTOS[i].name = produto.name;
  //         this.PRODUTOS[i].symbol = produto.symbol;
  //       }
  //     }      
  //   }
  //   console.table(this.PRODUTOS);
  // }

  ngOnInit() {
    this.produtosService.listarProdutos()
      .subscribe(response => {
        this.PRODUTOS = response;
        this.atualizarGrid()
      });
  }

}
