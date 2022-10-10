import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatepostComponent } from './createpost/createpost.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  constructor( private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(CreatepostComponent)
  }

}
