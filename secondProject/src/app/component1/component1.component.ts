import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { component1, Roomlist } from './component1';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  
})
export class Component1Component implements OnInit {
 roomlist:Roomlist[]=[];
  constructor() {

   }
selectedRoom!:Roomlist;
  ngOnInit() {
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
  name='shyam';
  age =20;
  bool=false

  fun1(){
    this.bool=!this.bool
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
