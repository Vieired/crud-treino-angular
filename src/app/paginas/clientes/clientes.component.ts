import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  tituloPagina: string = "Clientes";
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  itensBreadcrumb: ItensBreadcrumb[] = [
    { nome: this.tituloPagina, caminho: ''},
  ];

  constructor() { }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 6, item_text: 'Essen' },
      { item_id: 7, item_text: 'São Paulo' },
      { item_id: 8, item_text: 'Indianápolis' },
      { item_id: 9, item_text: 'Paris' },
      { item_id: 10, item_text: 'Santa Fé' },
      { item_id: 11, item_text: 'Jacarta' },
      { item_id: 12, item_text: 'Kinshasa' },
      { item_id: 13, item_text: 'Tianjin' },
      { item_id: 14, item_text: 'Tóquio' },
      { item_id: 15, item_text: 'Xangai' },
      { item_id: 16, item_text: 'Lagos' },
      { item_id: 17, item_text: 'Bombaim' },
      { item_id: 18, item_text: 'Moscou' },
      { item_id: 19, item_text: 'Seul' },
      { item_id: 20, item_text: 'Bagdá' },
      { item_id: 21, item_text: 'Londres' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }  
}
