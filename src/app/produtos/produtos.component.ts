import { Component, OnInit } from '@angular/core';

// interface ItensBreadcrumb {
//   nome: string,
//   caminho: string;
// }

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  // public itens: ItensBreadcrumb[] = [
  //   { nome: 'Dashboard', caminho: '/dashboard'},
  //   { nome: 'Contato', caminho: '/contato'},
  // ];
  private tituloPagina: string = "Produtos"

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
