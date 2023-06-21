import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  private tituloPagina: string = "Produtos"
  private itensBreadcrumb: ItensBreadcrumb[] = [
    { nome: this.tituloPagina, caminho: ''},
  ];

  tiles: any[] = [
    {text: 'Um', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Dois', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Três', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Quatro', cols: 2, rows: 1, color: '#DDBDF1'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
