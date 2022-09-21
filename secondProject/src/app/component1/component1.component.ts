import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit, DoCheck, OnChanges, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { component1, Roomlist } from './component1';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  
})
export class Component1Component implements OnInit, AfterViewInit, DoCheck{
  title: string = 'shyam';
 roomlist:Roomlist[]=[];
  @ViewChild(HeaderComponent)  headerComponent!: HeaderComponent;
  constructor() {

   }

   ngOnChange(){
  console.log('on change has occcured')
   }
   ngDoCheck(){
    console.log('on check is  has occcured')
     }
    
selectedRoom!:Roomlist;
  ngOnInit() {
    console.log(this.headerComponent)
   this.roomlist=[
    {
    roomNumber:102,
    roomType:'dwdd',
    amenities:'kjnnkfg',
    price:500,
    photos:'',
    checkinTime:new Date('12-Nov-2022'),
    chectOutTime:new Date('22-Nov-2022'),

  },
  {
    roomNumber:103,
    roomType:'dwdvmvd',
    amenities:'kjlmvmlnnkfg',
    price:5020,
    photos:'',
    checkinTime:new Date('12-Nov-2012'),
    chectOutTime:new Date('22-Nov-2012'),

  },
  {
    roomNumber:104,
    roomType:'dwddff',
    amenities:'kjnggnkfg',
    price:5700,
    photos:'',
    checkinTime:new Date('02-Nov-2022'),
    chectOutTime:new Date('22-Nov-2022'),

  }]
  }
  ngAfterViewInit() {
    console.log(this.headerComponent);
  }
  name='shyam';
  age =20;
  bool=false
  fun1(){
    this.bool=!this.bool
    this.title='This is changed the basics';
    
  }
  room:component1={
    totalRooms:30,
    availableRooms:20,
    bookedRooms:6
  }
  selectRoom(room:Roomlist){
    console.log(room)
    this.selectedRoom=room;
  }
addRoom(){
  const room:Roomlist={
    roomNumber:105,
    roomType:'dwdd',
    amenities:'kjnnkfg',
    price:5070,
    photos:'',
    checkinTime:new Date('12-Nov-2022'),
    chectOutTime:new Date('22-Nov-2022'),

  }


  // this.roomlist.push(room)
  this.roomlist=[...this.roomlist, room]
}

}
