import { livro } from 'src/app/features/home/models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 
 products: Array<livro> = [
  {
    id:1,
    name:"fff",
    description:"fff",
    imagem:"https://mundonegro.inf.br/wp-content/uploads/2022/03/Copia-de-MNDO-NEGRO-3.png",
    valor:4444
  }
  ];

  constructor() { }
  getProducts() {
    return this.products;
  }
  getById(id:number){
    return this.products.find((livro) => livro.id === id)
  }
}
