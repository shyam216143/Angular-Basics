import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  map,
  Observable,
  of,
  startWith,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('endOfChat')
  endOfChat!: ElementRef;
  userData!: any
  selectedUserData!:User
  users_data: User[]=[]

  private subscriptions: Subscription[] = [];

  searchControl = new FormControl('');
  messageControl = new FormControl('');
  chatListControl = new FormControl('');

  messages$: Observable<any[]> | undefined;





  constructor(private userService: UserService,
    private authService: AuthService

  ) { }

  ngOnInit(): void {

    this.userData = JSON.parse(this.authService.getAuthUserFromCache())
    console.log("hello world")
    console.log(this.userData)
    console.log(this.userData.id)


    this.authService.getUserFollowersData(this.userData.id).subscribe((data: User[]) => {
      data.forEach(x => {
        console.log(x)
        this.users_data.push(x)
      }
      )
      console.log(this.users_data)
    })
  }

  createChat(user: User) {
this.selectedUserData=user
  }

  sendMessage() {

  }

  scrollToBottom() {

  }
}
