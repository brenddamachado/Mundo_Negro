import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatailsPageComponent } from './pages/datails-page/datails-page.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    HomeComponent,
    DatailsPageComponent
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
