import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient
    ) { }
    
  onSubmit() {
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', 
                    JSON.stringify(this.formulario.value))
      // .map(res => res)
      .subscribe(dados => { 
                            console.log(dados); 
                            this.formulario.reset; 
                          }, (error: any) => alert('erro') );

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
  }

  resetar() {
   this.formulario.reset(); 
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
      obs: [null]
    });
  }

}
