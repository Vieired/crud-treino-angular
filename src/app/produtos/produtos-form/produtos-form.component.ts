import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'; // na aula 54 da Loiane é "rxjs/RX"

import { ProdutosService } from '../produtos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})

export class ProdutosFormComponent implements OnInit {

  tituloPagina: string = "Editar Produto";
  id: number;
  inscricao: Subscription; // como o "params" do objeto "route" retorna um BehaviorSubject (um objeto de inscrição), então posso criar uma variável do tipo de inscrição para receber o "route.params"
  produto: Produto;
  formulario: FormGroup;
  itensBreadcrumb: ItensBreadcrumb[] = [
    { nome: 'Produtos', caminho: '/produtos'},
    { nome: this.tituloPagina, caminho: ''},
  ];
  usandoModal: boolean = false;


  // classe ActivatedRoute injetada no construtor para ao inicializar e instanciar 
  // a classe ProdutosFormComponent já obter possíveis parâmetros que existirem na URL
  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService, // injetando o serviço ProdutosService no construtor da classe ProdutosFormComponent para poder se ultilizar dos métodos deste serviço
    private FormBuilder: FormBuilder,
  ) {
    // this.id = this.route.snapshot.params['id']; // dois problemas nesta forma de fazer (aula 54 da Loiane)
    // console.log(this.id);
    // this.id = 0;
    // this.produto = null;
    // this.produto = {
    //   id: 0,
    //   name: "",
    //   symbol: ""
    // }    
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
    // console.table("formulario: ", this.formulario.value);
    if(this.formulario.valid) {
      this.produtosService.inserirOuAtualizar(this.formulario.value);
    }
    else {
      this.validarCamposForm(this.formulario);
    }
  }

  validarCamposForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();

      // Valida os campos do formulário se existir uma instância de FormGroup
      // (equivalente ao TypeOf do JS)
      if(controle instanceof FormGroup)
        this.validarCamposForm(controle);
    });
  }

  cancelar() {
    window.history.go(-1);
  }

  carregarDadosFormulario() {
    let produtoEmEdicao: Produto = JSON.parse(localStorage.getItem('produtoEmEdicao'));
    // this.editandoViaModal = produtoEmEdicao && produtoEmEdicao.id > 0 ? true : false;
    this.usandoModal = JSON.parse(localStorage.getItem('usandoModal')) ? true : false;
    // console.log("produtoEmEdicao: ", produtoEmEdicao);
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if(this.usandoModal) {
          if(produtoEmEdicao != null && produtoEmEdicao.id > 0) {
            this.id = produtoEmEdicao.id; // pega o id do objeto no LocalStorage
            this.produto = this.produtosService.getProduto(this.id); // recupera o objeto inteiro

            // define valores e validações do formulário
            this.formulario = this.FormBuilder.group({
              acao: [this.produto.acao],
              id: [this.produto.id],
              name: [this.produto.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
              position: [this.produto.position],
              symbol: [this.produto.symbol],
              weight: [this.produto.weight],
            });
          }
          else {
            this.formulario = this.FormBuilder.group({
              acao: [null],
              id: [0],
              name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
              position: [null],
              symbol: [null],
              weight: [null],
            });            
          }
        }
        else {
          if(params['id']) {
            this.id = params['id']; // pega o id da URL
            this.produto = this.produtosService.getProduto(this.id); // recupera o objeto inteiro

            // define valores e validações do formulário
            this.formulario = this.FormBuilder.group({
              acao: [this.produto.acao],
              id: [this.produto.id],
              name: [this.produto.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
              position: [this.produto.position],
              symbol: [this.produto.symbol],
              weight: [this.produto.weight],     
            });
          }
        }
      }
    );
  }

  ngOnInit() {
    // carrega dados no formulário
    this.carregarDadosFormulario()
  }

  ngOnDestroy() { // mesmo depois do objeto de ProdutosFormComponent ser destruído, a inscrição pode continuar viva. Então faço a desinscrição no momento da destruição deste objeto para não ficar desperdiçando memória da máquina atoa (tipo um GarbageCollector do Java).
    this.inscricao.unsubscribe();
  }

}
