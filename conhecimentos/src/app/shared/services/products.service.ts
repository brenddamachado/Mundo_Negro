import { Injectable } from '@angular/core';
import { livro} from 'src/app/features/home/models/product.model';

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
    },
    {
      id: 5,
      name: "Escravidão ",
      description: "fff",
      imagem: "https://m.media-amazon.com/images/I/51KySEk1XyL._SX338_BO1,204,203,200_.jpg",
      valor: 4444
    },
    {
      id: 6,
      name: "Racismo Linguístico",
      description: "fff",
      imagem: "https://m.media-amazon.com/images/I/511dsdseUtL.jpg",
      valor: 4444
    },
    {
      id: 7,
      name: "Amoras",
      description: "fff",
      imagem: "https://www.blogdaletrinhas.com.br/app/webroot/files/uploads/ckfinder/images/amoras640.jpg",
      valor: 4444
    },
    {
      id: 8,
      name: " Da minha janela",
      description: "fff",
      imagem: "https://www.blogdaletrinhas.com.br/app/webroot/files/uploads/ckfinder/images/livro-infantil-da-minha-janela.jpeg",
      valor: 4444
    },
    {
      id: 9,
      name: "Mandela: O africano de todas as cores!",
      description: "fff",
      imagem: "https://cangurunews.com.br/wp-content/uploads/2020/06/livro-mandela.jpg",
      valor: 4444
    },
    {
      id: 10,
      name: "Em busca de mim",
      description: "fff",
      imagem: "https://m.media-amazon.com/images/I/51UgR5xhuvL._SX343_BO1,204,203,200_.jpg",
      valor: 4444
    },
  ];

 

  constructor() { }

  getProducts() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((livro) => livro.id === id);
  }
}
