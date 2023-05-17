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
  
}
