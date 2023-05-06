import { ProductsService } from '../../../../shared/services/products.service';
import { Component, NgModule } from '@angular/core';
import { livro } from '../../models/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  livros: Array<livro> = this.ProductsService.getProducts();

  constructor (private ProductsService: ProductsService ) {}
}