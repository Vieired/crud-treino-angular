import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  showFiller = false;
  @Input() gaveta: boolean = false;

  constructor() { }

  abrirOuFechar() {
    debugger;
    console.log(this.gaveta);
    console.log(this.showFiller);
    // if(this.showFiller)
    //   this.showFiller = false;
    // else
    //   this.showFiller = true;
  }

  ngOnInit() {
  }

}
