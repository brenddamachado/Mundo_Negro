import { Injectable } from '@angular/core';
import { livro } from 'src/app/features/home/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  products: Array<livro> = [
    {
      id: 1,
      name: "Jamais peço desculpas por me derramar",
      description: "fff",
      imagem: "https://m.media-amazon.com/images/I/51-cxkG+PyL._SX324_BO1,204,203,200_.jpg",
      valor: 27
    },
    {
      id: 2,
      name: "Tem lugar ai pra mim?",
      description: "fff",
      imagem: "https://m.media-amazon.com/images/I/51T3D6VekaS._SX352_BO1,204,203,200_.jpg",
      valor: 4444
    },
    {
      id: 3,
      name: "A Outra Garota Negra",
      description: "fff",
      imagem: "https://m.media-amazon.com/images/I/51M+keoMA9L._SY498_BO1,204,203,200_.jpg",
      valor: 4444
    },
    {
      id: 4,
      name: "Na minha pele",
      description: "fff",
      imagem: "https://m.media-amazon.com/images/I/51g+hJK3CdL._SX330_BO1,204,203,200_.jpg",
      valor: 4444
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((livro) => livro.id === id);
  }
}
