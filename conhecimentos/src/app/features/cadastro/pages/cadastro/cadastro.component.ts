import { UserService } from './../../../../shared/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {


  recado(){
    
    alert('Oi pretinha (o), recebemos seu cadastro e ele está em analise. Você receberá um e-mail em breve para permitir o acesso')
  }

  constructor(private router: Router,
    private userService: UserService){} 
  
  navigateByUrl(url:string){
    this.router.navigateByUrl(url);
  }
  

}
