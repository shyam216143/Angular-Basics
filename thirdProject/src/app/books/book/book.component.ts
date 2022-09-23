import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { Product } from '../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit ,OnDestroy{
@Input() product1: Product={} as Product;
  constructor(private cartService:CartService) { }
  ngOnDestroy(): void {
    console.log('onDestroy');
  }
isInCart:Boolean=false;
  ngOnInit(): void {
  }
funCart(){
  this.isInCart=true;
  this.cartService.addproductCart(this.product1)
  
}
funCartRemove(){
  this.isInCart=false;
  this.cartService.removeProduct(this.product1)
}


}
