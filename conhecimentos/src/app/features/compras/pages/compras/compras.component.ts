import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent {
  constructor(private router: Router){}

  navigateByUrl(url:string){
    this.router.navigateByUrl(url);
  }
  recado(){
    alert('Olá, Recebemos seu e-mail no nosso banco de dados. Agora você vai estar por dentro de todas as novidades, obrigada pretinha (o)!')
  }
}
