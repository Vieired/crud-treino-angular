import { DropdownService } from './../shared/services/dropdown.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from '../shared/models/estado-br.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  tituloPagina: string = "Contato";
  formulario: FormGroup;
  // estados: EstadoBr[];
  // estados: Observable<EstadoBr[]>;
  estados: any;
  cargos: any;
  tecnologias: any;

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService // injetando o serviço que provê uma lista de estados brasileiros, entre outras listas
    ) { }
    
  onSubmit() {
    console.log(this.formulario.value);
    if(this.formulario.valid) {
      this.http.post(
        'https://httpbin.org/post', 
        JSON.stringify(this.formulario.value)
      )
      .subscribe(dados => { 
          console.log(dados); 
          this.formulario.reset; 
          alert("Registro Adicionado com Sucesso.");
        },
        (error: any) => alert('erro')
      );
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

  setarCargo() {
    const cargo = { nome: "Dev", nivel: "Senior", desc: "Dev Sr" };
    this.formulario.get('cargo').setValue(cargo);
  }

  setarTecnologia() {
    const tec = [
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'typescript', desc: 'TypeScript' }
    ];
    this.formulario.get('tecnologia').setValue(tec);
  }  

  compararCargos(obj1, obj2) {
    return obj1 && obj2
      ?
      (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel)
      :
      obj1 === obj2;
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
      obs: [null],
      endereco: this.FormBuilder.group({
        rua: [null, Validators.required],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        uf: [null, Validators.required],
        cep: [null]
      }),
      cargo: [null],
      tecnologia: [null]
    });

    /* Preenchimento da dropdown UF */
    // this.dropdownService.getEstadosBrGet() //### COM SUBSCRIBE: isso pode gerar vazamento de memória, pois mesmo com o componente sendo destruído pode acontecer de continuar na memória
    //   .subscribe(
    //     (data: EstadoBr[]) => {this.estados = data; console.log(data);},
    //     error => console.log(error)
    //   );

    this.estados = this.dropdownService.getEstadosBrGet(); //### COM PIPE ASYNC: desta forma não há possibilidade de vazamento de memória, pois o Pipe async que está declarado no html faz e desfaz o subscribe automaticamente
    /* Fim preenchimento da dropdown UF */

    /* Preenchimento da dropdown Cargo */
    this.cargos = this.dropdownService.getCargos();
    /* Fim preenchimento da dropdown Cargo */

    this.tecnologias = this.dropdownService.getTecnologias();
  }

}
