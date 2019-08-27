import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './shared/models/nav-item';
import {NavService} from './shared/services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'crud-treino';
  showFiller = false;
  tocado:boolean = false;

  @ViewChild('appDrawer', null) appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Produtos',
      iconName: 'devices_other',
      route: 'produtos'
    },    
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard'
    },
    {
      displayName: 'Clientes',
      iconName: 'person',
      children: [
        {
          displayName: 'Produtos',
          iconName: 'devices_other',
          route: 'produtos'
        },
        {
          displayName: 'Dashboard',
          iconName: 'dashboard',
          route: 'dashboard'
        },
        {
          displayName: 'Clientes',
          iconName: 'person',
          route: 'clientes'
        },                        
      ]
    },
    {
      displayName: 'Contato',
      iconName: 'phone',
      route: 'contato'
    }
  ];

  constructor(private navService: NavService) {
  }

  marcarOpcao(elemContato:ElementCSSInlineStyle) {
    // var aux = this;
    // elemContato._elementRef.nativeElement.classList;
    // debugger;
    this.tocado = false;
    this.tocado = true;
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
