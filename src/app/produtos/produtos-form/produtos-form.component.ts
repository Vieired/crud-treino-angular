import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'; // na aula 54 da Loiane é "rxjs/RX"

import { ProdutosService } from '../produtos.service';
import { Form } from '@angular/forms';
import { Produto } from '../produtos.model';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})

// export interface Produto {
//   id?: number;
//   descricao?: string;
//   observacao?: string;
// }

export class ProdutosFormComponent implements OnInit {

  tituloPagina: string = "Editar Produto";
  id: number;
  inscricao: Subscription; // como o "params" do objeto "route" retorna um BehaviorSubject (um objeto de inscrição), então posso criar uma variável do tipo de inscrição para receber o "route.params"
  produto: any;
  // produto: Produto;
  form: Form;
  itensBreadcrumb: ItensBreadcrumb[] = [
    { nome: 'Produtos', caminho: '/produtos'},
    { nome: this.tituloPagina, caminho: ''},
  ];  


  // classe ActivatedRoute injetada no construtor para ao inicializar e instanciar 
  // a classe ProdutosFormComponent já obter possíveis parâmetros que existirem na URL
  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService // injetando o serviço ProdutosService no construtor da classe ProdutosFormComponent para poder se ultilizar dos métodos deste serviço
  ) {
    // this.id = this.route.snapshot.params['id']; // dois problemas nesta forma de fazer (aula 54 da Loiane)
    // console.log(this.id);
    // this.id = 0;
    // this.produto = null;
    this.produto = {
      id: 0,
      name: "",
      symbol: ""
    }    
  }

  // submeterFormulario(formulario?) {
  //   if(formulario) {
  //     this.produtosService.inserirOuAtualizar(formulario.value);
  //     console.table("Formulário: " + formulario.value);
  //   }
  //   else {
  //     this.produtosService.inserirOuAtualizar();
  //     console.table("Formulário novo!");
  //   }
  // }
  submeterFormulario() {
    let produto = this.produto;
    console.table(produto);
    this.produtosService.inserirOuAtualizar(produto);
  }

  cancelar() {
    window.history.go(-1);
  }

  teste() {
    alert("testezim");
  }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(function(params:any) {
    //   this.id = params['id'];
    //   this.produtos = this.produtosService.getProduto(/*this.id*/5);
    // });
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if(params['id']) {
          this.id = params['id']; // pega o id da URL
          this.produto = this.produtosService.getProduto(this.id); // pega o objeto inteiro
        }
        // else {
        //   this.produto = {
        //     id: 0,
        //     name: "",
        //     symbol: ""
        //   }
        // }
      }
    );
  }

  ngOnDestroy() { // mesmo depois do objeto de ProdutosFormComponent ser destruído, a inscrição pode continuar viva. Então faço a desinscrição no momento da destruição deste objeto para não ficar desperdiçando memória da máquina atoa (tipo um GarbageCollector do Java).
    this.inscricao.unsubscribe();
  }

}
