import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { DatailsPageComponent } from './features/home/pages/datails-page/datails-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'product-datails/:livroId', component: DatailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
