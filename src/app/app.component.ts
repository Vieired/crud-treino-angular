import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-treino';
  showFiller = false;
  tocado:boolean = false;

  marcarOpcao(elemContato:ElementCSSInlineStyle) {
    // var aux = this;
    // elemContato._elementRef.nativeElement.classList;
    // debugger;
    this.tocado = false;
    this.tocado = true;
  }
}
