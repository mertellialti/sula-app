import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productMenTShirt = [
    { id: 0, name: 'JUICE', price: 99, images: ['../../assets/imgs/man/t-shirt/0.jpeg', '../../assets/imgs/man/t-shirt/1.jpeg'] },
    { id: 1, name: 'STAMP Records', price: 89, images: ['../../assets/imgs/man/t-shirt/2.jpeg'] },
    { id: 2, name: 'Chase The Carrot', price: 94.99, images: ['../../assets/imgs/man/t-shirt/3.jpeg'] },
    { id: 3, name: 'Good Vibes', price: 94.99, images: ['../../assets/imgs/man/t-shirt/4.jpeg'] },
  ]

  constructor() {

  }

}
