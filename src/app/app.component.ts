import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input!: string;
  cep!:string;
  readonly  menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];
  constructor(private http:HttpClient){
  
  }
    onClick() {
      this.http.get(`https://brasilapi.com.br/api/cnpj/v1/${this.input}`).subscribe((value:any)=>{
        console.log(value.cnpj,value.cep,value)
        this.cep=value.cep
      })
      console.log(this.input)
    alert('Clicked in menu item')
  }

}
