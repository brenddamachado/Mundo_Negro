import { UserService } from './../../../../shared/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router,
    private userService: UserService) { }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
  email: string = '';
  senha: string = '';
  error = false;


  authenticate() {
    const user =
     this.userService.getUserByEmailAndPassword(
      this.email, this.senha);
      
      if(user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/produtos');
      }else{
        this.error=true;
      }

  }
}
