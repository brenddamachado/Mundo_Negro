import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){} 
  
  navigateByUrl(url:string){
    this.router.navigateByUrl(url);
  }
  
}
