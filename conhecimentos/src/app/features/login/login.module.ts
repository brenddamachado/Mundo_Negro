import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroModule } from '../cadastro/cadastro.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    CadastroModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
