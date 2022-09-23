import { Injectable } from '@angular/core';
import { Product } from '../../books/books'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  add(product1: Product) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  myproduct:Product[]=[
    {
      id: 1,
      name: 'mens wear',
    price: 500,
    size:'M',
    image:"https://images-eu.ssl-images-amazon.com/images/I/618Wek95laS._AC._SR360,460.jpg"
    },
    {
      id: 2,
      name: 'womens wear',
    price: 1000,
    size:'M',
    image:"https://n2.sdlcdn.com/imgs/k/h/q/230X258_sharpened/Rudrakriti-Black-Crepe-Women-s-SDL526053648-1-48d12.jpg"
    },{
      id: 3,
      name: 'children wear',
    price: 500,
    size:'M',
    image:"https://cf.shopee.ph/file/6f0641340d44594489081dc675edd724"
    },{
      id: 4,
      name: 'shoeswear',
    price: 2000,
    size:'9',
    image:"https://m.media-amazon.com/images/I/81qtv39igWS._UY675_.jpg"
    }
  ]
addProduct:Array<Product>=[]

  getProduct(){
    return this.myproduct;
  }
  addproductCart(product:Product){
    this.addProduct.push(product)
  }
  get(){
    return this.addProduct;
  }
  removeProduct(product:Product){
    this.addProduct= this.addProduct.filter(c=>c!=product);
  }
}
 