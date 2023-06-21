import { NavService } from '../../shared/services/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private tituloPagina: string = 'Dashboard';
  itensBreadcrumb: ItensBreadcrumb[] = [
    { nome: this.tituloPagina, caminho: ''},
  ];  

  constructor() { }

  ngOnInit() {
  }

}
