import { Component } from '@angular/core';
import { livro } from '../../models/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  livros: Array<livro> = [
    {
      id:1,
      name:"fff",
      description:"fff",
      imagem:" https://pbs.twimg.com/media/FvYd_c_WcAIMPJJ?format=jpg&name=medium",
      valor:4444
    }
  ];


}
