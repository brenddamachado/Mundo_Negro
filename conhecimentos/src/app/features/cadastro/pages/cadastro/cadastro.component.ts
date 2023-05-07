import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(private router: Router){} 
  
  navigateByUrl(url:string){
    this.router.navigateByUrl(url);
  }
}
