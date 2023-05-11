import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router){}

navigateByUrl(url:string){
  this.router.navigateByUrl(url);
}

user?: User;

ngOnInit(): void{
  const userSessionStorage = sessionStorage.getItem('user')
if(userSessionStorage){
   this.user = JSON.parse(userSessionStorage)
}

 

}
}
