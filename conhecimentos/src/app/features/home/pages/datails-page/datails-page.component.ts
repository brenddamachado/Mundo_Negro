import { ProductsService } from './../../../../shared/services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { livro } from '../../models/product.model';

@Component({
  templateUrl: './datails-page.component.html',
  styleUrls: ['./datails-page.component.scss']
})
export class DatailsPageComponent {
 
product?: livro;

  constructor(
  private activedRoute: ActivatedRoute,
  private productsService: ProductsService) {}

  ngOnInit(): void{
    this.activedRoute.params.subscribe((params) =>{
      const id = parseInt (params['livroId']);
      this.product = this.productsService.getById(id);
      console.log(this.product)
    })
  }

}
