import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  termo = {
    paciente: {
      nome: "Astrogildo Epaminondas Eustáquio de Aquino Zimbábue",
      rg: {
        numero: "30.896.376-9",
        orgaoExpedidor: "DETRAN"
      },
      cpf: "999.999.999-9",
      endereco: "Rua do Sobe e Desce, nº 9090, Jardim do Mato, Rio de Janeiro - RJ"
    },
    procurador: {
      nome: "Anastácia",
      rg: "23.768.565-1",
      cpf: "245.765.453-68",
      endereco: "Rua dos Olimpianos, nº 12346, Elos Perdidos, Minas Gerais - MG"
    },
    dadosAtendimento: {
      periodoInicio: "22/04/2018",
      periodoFim: "22/09/2019",
      local: "Clínica de Olhos",
      procedimento: "Extração de Costela Torta",
      valor: "2.485,33",
      responsavel: {
        nome: "Geraldo Motta de Assis Ferreira Dalarovik",
        crm: "67.188-6"
      }
    },
    tratamentoPaciente: "Ressonância Magnética Com Contraste",
    nomeClinica: "Arranjos Emaranhados Saúde Saudável SA",
    testemunha1: {
      nome: "Suzana Marques de Aquino",
      cpf: "324.752.134-76"
    },
    testemunha2: {
      nome: "Milton Nascimento de Ribeiro Lima",
      cpf: "467.123.111-11"
    }    
  }

  constructor() { }

  ngOnInit() {
  }

}
