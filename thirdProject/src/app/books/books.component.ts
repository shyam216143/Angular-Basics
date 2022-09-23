import { outputAst } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart/service/cart.service';
import { Product } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
productList: Product[]=[];
isDisabled: boolean = true;
name:string ='';
x:Product[]=[];
  constructor(private productService:CartService) { }
  
  ngOnInit(): void {
    console.log('hekllo')
    this.productList=this.productService.getProduct();
  }
  funToggle(){
    this.isDisabled=! this.isDisabled;
    
  }
  
  


}
