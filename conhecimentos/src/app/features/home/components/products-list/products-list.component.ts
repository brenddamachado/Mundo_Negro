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
      imagem:"https://mundonegro.inf.br/wp-content/uploads/2022/03/Copia-de-MNDO-NEGRO-3.png",
      valor:4444
    }
  ];


}
