import { Router } from '@angular/router';
import { ProductsService } from '../../../../shared/services/products.service';
import { Component, NgModule } from '@angular/core';
import { livro } from '../../models/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  datahoje = new Date();
  titulo = "Explore a cultura!";
  livros: Array<livro> = this.productsService.getProducts();

  constructor (private productsService: ProductsService,
    private router: Router ) {}

    detalhesProduto(idlivro: number) {
      this.router.navigateByUrl
      (`product-datails/${idlivro}`);
    }
}