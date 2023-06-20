import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, Inject} from '@angular/core';
import {VERSION, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
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
      displayName: 'Alfa nv1',
      iconName: 'account_tree',
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
      displayName: 'Beta nv1',
      iconName: 'account_tree',
      children: [
        {
          displayName: 'Produtos',
          iconName: 'devices_other',
          route: 'produtos'
        },
        {
          displayName: 'Clientes',
          iconName: 'person',
          route: 'clientes'
        },        
        {
          displayName: 'Charlie nv2',
          iconName: 'account_tree',
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
            {
              displayName: 'Contato',
              iconName: 'phone',
              route: 'contato'
            }                 
          ]
        }                       
      ]
    },    
    {
      displayName: 'Clientes',
      iconName: 'person',
      route: 'clientes'
    },    
    {
      displayName: 'Contato',
      iconName: 'phone',
      route: 'contato'
    },
    {
      displayName: 'Termo',
      iconName: 'phone',
      route: 'termo'
    }    
  ];

  constructor(private navService: NavService, public dialog: MatDialog) { }

  marcarOpcao(elemContato:ElementCSSInlineStyle) {
    // var aux = this;
    // elemContato._elementRef.nativeElement.classList;
    // debugger;
    this.tocado = false;
    this.tocado = true;
  }

  confirmarLogout() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px'
    });
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}



@Component({
  template: `
      <h1 mat-dialog-title>Logout</h1>
      <div mat-dialog-content>
        <p>Tem certeza que deseja encerrar?</p>
      </div>
      <div mat-dialog-actions align="end">
        <button mat-button mat-raised-button (click)="onNoClick()">Sim</button>
        <button mat-button mat-raised-button color="primary" [mat-dialog-close]="true" cdkFocusInitial>Cancelar</button>
      </div>
  `
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}