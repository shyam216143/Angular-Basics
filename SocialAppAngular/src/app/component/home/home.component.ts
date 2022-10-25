import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  selectedUserData!: User
  users_data: User[] = []

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
    this.selectedUserData = user
  }

  sendMessage(selectedUserData:any) {
    const message = "shyam fbjkhfehguirhjuhgkojehguhg  nbfnjm jhbgvf mnjhbvf jhbjhnjkn unbkjnkj  nkjn njk nb implements"
    const message1 = 'bfjkswddsd'
    
    function countWords(message: string) {
      const arr = message.split(' ');

      return arr

    }
    let arr = countWords(message)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 10) {
        arr[i] = arr[i].slice(0, arr[i].length / 2) + " " + arr[i].slice(arr[i].length / 2);
      }
    }
    let output = ''
    for (let i of arr) {
      output += i + " "
    }


    let ele = document.getElementById('chat-area')
    if (ele != null){
      ele.innerHTML += "<div style=\"width:100%;display:flex;flex-direction:row-reverse\"><p style=\"background-color:grey;max-width:40%;padding:0px 10px;border-radius:10px;\">" + output + message.length + "</p></div>"
      ele.innerHTML += "<div style=\"width:100%;display:flex;flex-direction:row\"><img src=\"http://127.0.0.1:8000${selectedUserData.cover_photo}\"><p style=\"background-color:grey;max-width:40%;padding:0px 10px;border-radius:10px;\">" + output + message.length + "</p></div>"
      let pixels= ele.clientHeight;
     
      ele.scrollBy(0,pixels);
      
    }   


  }

  scrollToBottom() {

  }
}
