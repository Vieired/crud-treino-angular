import {EventEmitter, Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class NavService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  public toggleNav() {
    if(this.appDrawer.opened)
      this.appDrawer.close();
    else
      this.appDrawer.open();
  }

  visualizarImpressao() {
    // abre a visualização de impressão, fechando o menu antes caso ele esteja aberto
    if(this.appDrawer.opened)
      this.appDrawer.close();
    setTimeout(() => {
        self.print();
      },
    200);
  }  
}
