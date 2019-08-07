import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  constructor(private http: HttpClient) { }

  getCargos() {
    return [
      { nome: "Dev", nivel: "Junior", desc: "Dev Jr" },
      { nome: "Dev", nivel: "Pleno", desc: "Dev Pl" },
      { nome: "Dev", nivel: "Senior", desc: "Dev Sr" }
    ];
  }

  getEstadosBrGet() {
    return this.http.get('/assets/dados/estadosbr.json'); // ao invés de usar o json diretamente aqui, ele está em um arquivo separado conforme sugere as boas práticas
      // .map( (x:Response) => x.json() ); // parece que o método map() ficou obsoleto nas novas versões do Angular
  }

  getEstadosBr() {
    return JSON.parse(JSON.stringify([
      {
        "id": 1,
        "sigla": "AC",
        "nome": "Acre"
      },
        {
        "id": 2,
        "sigla": "AL",
        "nome": "Alagoas"
      },
        {
        "id": 3,
        "sigla": "AM",
        "nome": "Amazonas"
      },
        {
        "id": 4,
        "sigla": "AP",
        "nome": "Amapá"
      },
        {
        "id": 5,
        "sigla": "BA",
        "nome": "Bahia"
      },
        {
        "id": 6,
        "sigla": "CE",
        "nome": "Ceará"
      },
        {
        "id": 7,
        "sigla": "DF",
        "nome": "Distrito Federal"
      },
        {
        "id": 8,
        "sigla": "ES",
        "nome": "Espírito Santo"
      },
        {
        "id": 9,
        "sigla": "GO",
        "nome": "Goiás"
      },
        {
        "id": 10,
        "sigla": "MA",
        "nome": "Maranhão"
      },
        {
        "id": 11,
        "sigla": "MG",
        "nome": "Minas Gerais"
      },
        {
        "id": 12,
        "sigla": "MS",
        "nome": "Mato Grosso do Sul"
      },
        {
        "id": 13,
        "sigla": "MT",
        "nome": "Mato Grosso"
      },
        {
        "id": 14,
        "sigla": "PA",
        "nome": "Pará"
      },
        {
        "id": 15,
        "sigla": "PB",
        "nome": "Paraíba"
      },
        {
        "id": 16,
        "sigla": "PE",
        "nome": "Pernambuco"
      },
        {
        "id": 17,
        "sigla": "PI",
        "nome": "Piauí"
      },
        {
        "id": 18,
        "sigla": "PR",
        "nome": "Paraná"
      },
        {
        "id": 19,
        "sigla": "RJ",
        "nome": "Rio de Janeiro"
      },
        {
        "id": 20,
        "sigla": "RN",
        "nome": "Rio Grande do Norte"
      },
        {
        "id": 21,
        "sigla": "RO",
        "nome": "Rondônia"
      },
        {
        "id": 22,
        "sigla": "RR",
        "nome": "Roraima"
      },
        {
        "id": 23,
        "sigla": "RS",
        "nome": "Rio Grande do Sul"
      },
        {
        "id": 24,
        "sigla": "SC",
        "nome": "Santa Catarina"
      },
        {
        "id": 25,
        "sigla": "SE",
        "nome": "Sergipe"
      },
        {
        "id": 26,
        "sigla": "SP",
        "nome": "São Paulo"
      },
        {
        "id": 27,
        "sigla": "TO",
        "nome": "Tocantins"
      }
    ]));

    /* Fonte: https://github.com/felipefdl/cidades-estados-brasil-json/blob/master/Estados.json */
  }  
}
