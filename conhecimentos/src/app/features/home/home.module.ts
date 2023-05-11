import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatailsPageComponent } from './pages/datails-page/datails-page.component';
import { CarrosselComponent } from '../carrossel/pages/carrossel/carrossel.component';
import { ComprasComponent } from '../compras/pages/compras/compras.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    HomeComponent,
    DatailsPageComponent,
    CarrosselComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ], 
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
