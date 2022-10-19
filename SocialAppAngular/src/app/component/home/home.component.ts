import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  map,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('endOfChat')
  endOfChat!: ElementRef;

 

  searchControl = new FormControl('');
  messageControl = new FormControl('');
  chatListControl = new FormControl('');

  messages$: Observable<any[]> | undefined;

 
  

  
  constructor(
   
  ) {}

  ngOnInit(): void {
  
  }

  createChat(user: any) {
   
  }

  sendMessage() {
   
  }

  scrollToBottom() {
   
  }
}
