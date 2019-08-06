import { DropdownService } from './../shared/services/dropdown.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from '../shared/models/estado-br.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoBr[];
  // estados: Observable<EstadoBr[]>;

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService // injetando o serviço que provê uma lista de estados brasileiros
    ) { }
    
  onSubmit() {
    console.log(this.formulario.value);
    if(this.formulario.valid) {
      this.http.post('https://httpbin.org/post', 
                      JSON.stringify(this.formulario.value))
        .subscribe(dados => { 
                              console.log(dados); 
                              this.formulario.reset; 
                            }, (error: any) => alert('erro') );
    }
    else {
      this.validarCamposForm(this.formulario);
    }

    /*
      MOCK DE REQUISIÇÕES HTTP
      https://resttesttest.com/#
      Method: POST
      Endpoint: https://httpbin.org/post
      Add Parameter:
      nome: Joaquim Barbosa
      email: amoeba@ameba.com.br
      obs: Agora vamos ao teste
    */

    // this.formulario.get('nome').setValue('Testezim');
  }

  resetar() {
   this.formulario.reset(); 
  }

  // validarCampo(campo: string) {
  //   console.log(campo);
  // }
  validarCamposForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(x => {
      console.log(x);
      const controle = formGroup.get(x);
      controle.markAsDirty();
      if(controle instanceof FormGroup) // verifica se é uma instância de FormGroup (equivalente ao TypeOf do JS)
        this.validarCamposForm(controle);
    });
  }  

  ngOnInit() {
    /* forma mais verbosa de fazer o mesmo de baixo */
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.FormBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.FormBuilder.group({
        rua: [null, Validators.required],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        uf: [null, Validators.required],
        cep: [null]
      }),

      obs: [null]
    });

    this.dropdownService.getEstadosBrGet()
      .subscribe(
        (data: EstadoBr[]) => {this.estados = data; console.log(data);},
        error => console.log(error)
      );


    // this.estados = this.dropdownService.getEstadosBr();
    // this.estados = this.dropdownService.getEstadosBrGet();
    // console.log( this.dropdownService.getEstadosBrGet() );
    // console.log( this.dropdownService.getEstadosBr() );

    // this.dropdownService.getEstadosBr();
      // .subscribe( x => this.estados = x); // porque não aceita o subscribe??? Na aula da Loiane aceita
      // .subscribe( data => { this.estados = data; console.log(data); } );
      // .subscribe( (data: EstadoBr) => this.estados = {this.data} );
      // .subscribe( dados => console.log(dados) );
      // .subscribe( dados => JSON.stringify(dados) );
      // .subscribe( dados => dados = JSON.stringify(this.estados) );
      // .subscribe( dados => {this.estados = dados} );
      // .subscribe( dados => dados = JSON.stringify(dados) );
      // .subscribe( data => {this.estados = data} );
      // .subscribe( data => this.estados = data );
  }

}
