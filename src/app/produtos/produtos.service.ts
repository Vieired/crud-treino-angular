import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  private PRODUTOS: any = [
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

  constructor() { }

  getProdutos() {
    return this.PRODUTOS;
  }

  getProduto(id: number) {
    let produtos = this.getProdutos();
    for(let i=0 ; i<produtos.length ; i++) {
      let produto = produtos[i];
      if(produto.id == id)
        return produto;
    }
    return null;
  }

  setProduto(produto: any) {
    // isto em condições reais seria um update no banco via query
    for(let i=0 ; i<this.PRODUTOS.length ; i++) {
      if(this.PRODUTOS[i].id == produto.campoId) {
        this.PRODUTOS[i].name = produto.campoNome;
        this.PRODUTOS[i].symbol = produto.campoObservacoes;
      }
    }
  }

  obterNovoId() {
    let aux = [];
    for(let i=0 ; i<this.PRODUTOS.length ; i++) {
      aux.push( this.PRODUTOS[i].id );
    }
    return Math.max.apply(null, aux) + 1;
  }

  obterNovoPosition() {
    let aux = [];
    for(let i=0 ; i<this.PRODUTOS.length ; i++) {
      aux.push( this.PRODUTOS[i].position );
    }
    return Math.max.apply(null, aux) + 1;
  }  

  // inserirOuAtualizar(produto?: any) {
  //   debugger;
  //   if(!produto || produto.campoId == 0) { // se o produto não existe ou tem id 0, então crie um registro novo
  //     let aux = {acao:null, id: this.obterNovoId(), 'position': this.obterNovoPosition(), 'name': produto.campoNome, weight: 1.0079, 'symbol': produto.campoObservacoes};
  //     console.table(aux);
  //     this.PRODUTOS.push(aux);
  //   }
  //   else { // se o produto existe então adicione ele
  //     for(let i=0 ; i<this.PRODUTOS.length ; i++) {
  //       if(this.PRODUTOS[i].id == produto.campoId) {
  //         this.PRODUTOS[i].name = produto.campoNome;
  //         this.PRODUTOS[i].symbol = produto.campoObservacoes;
  //       }
  //     }      
  //   }
  // }

  inserirOuAtualizar(produto: any) {
    debugger;
    if(produto.id == 0) { // se o produto tem id 0, então adicione ele como um novo registro
      let aux = {
        acao: null, 
        id: this.obterNovoId(), 
        position: this.obterNovoPosition(), 
        name: produto.name, 
        weight: 1.0079, 
        symbol: produto.symbol
      };
      this.PRODUTOS.push(aux);
      console.table(aux);
      // alert("Registro Adicionado com Sucesso.");
    }
    else { // se o produto tem id maior que 0 então atualize ele
      for(let i=0 ; i<this.PRODUTOS.length ; i++) {
        if(this.PRODUTOS[i].id == produto.campoId) {
          this.PRODUTOS[i].name = produto.campoNome;
          this.PRODUTOS[i].symbol = produto.campoObservacoes;
        }
      }      
    }
    console.table(this.PRODUTOS);
  }  
}
