import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from './pages/carrossel/carrossel.component';



@NgModule({
  declarations: [
    CarrosselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarrosselComponent
  ]

})
export class CarrosselModule { }
