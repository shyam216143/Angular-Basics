import { Component, OnInit } from '@angular/core';
import { Product } from '../books/books';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartServices:CartService) { }

  getcartData:Product[] = []
  ngOnInit(): void {
  }
  addProductcart:Array<Product> = []

  getCart(){
    console.log(this.cartServices.get())
    return this.cartServices.get();

  }

}
