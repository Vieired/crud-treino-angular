import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'; // na aula 54 da Loiane é "rxjs/RX"

import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {

  id: number;
  inscricao: Subscription; // como o "params" do objeto "route" retorna um BehaviorSubject (um objeto de inscrição), então posso criar uma variável do tipo de inscrição para receber o "route.params"
  produto: any;

  // classe ActivatedRoute injetada no construtor para ao inicializar e instanciar a classe ProdutosFormComponent já obter possíveis parâmetros que existirem na URL
  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService // injetando o serviço ProdutosService no construtor da classe ProdutosFormComponent para poder se ultilizar dos métodos deste serviço
  ) {
    // this.id = this.route.snapshot.params['id']; // dois problemas nesta forma de fazer (aula 54 da Loiane)
    // console.log(this.id);
  }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(function(params:any) {
    //   this.id = params['id'];
    //   this.produtos = this.produtosService.getProduto(/*this.id*/5);
    // });

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.produto = this.produtosService.getProduto(this.id);
      }
    );
  }

  ngOnDestroy() { // mesmo depois do objeto de ProdutosFormComponent ser destruído, a inscrição pode continuar viva. Então faço a desinscrição no momento da destruição deste objeto para não ficar desperdiçando memória da máquina atoa (tipo um GarbageCollector do Java).
    this.inscricao.unsubscribe();
  }

}
