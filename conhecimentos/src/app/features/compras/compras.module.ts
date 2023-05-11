import { ComprasComponent } from './pages/compras/compras.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    ComprasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ComprasComponent
  ]
})
export class ComprasModule { }
