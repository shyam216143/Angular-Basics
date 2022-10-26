import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  userData!: User
  selectedUserData!: User
  users_data: User[] = []

  ws = new WebSocket('ws://127.0.0.1:8000/ws/as/')
  private subscriptions: Subscription[] = [];
  chatInputMessage!: FormGroup
  searchControl = new FormControl('');
  messageControl = new FormControl('');
  chatListControl = new FormControl('');

  messages$: Observable<any[]> | undefined;





  constructor(private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.chatInputMessage = this.fb.group({
      selectedUserData: new FormControl('', Validators.required)
    })
    this.ws.onopen = function (event) {
      console.log("websocket is opened...", event)
    }

    this.ws.onerror = function (event) {
      console.log("websocket is receiving error...", event)
    }
    this.ws.onclose = function (event) {
      console.log("websocket is closed...", event)
    }
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
  wordWrap(str: string, maxWidth: number): any {
    var newLineStr = "\n";
    const done = false;
    let res = '';
    while (str.length > maxWidth) {
      let found = false;
      // Inserts new line at first whitespace of the line
      for (let i = maxWidth - 1; i >= 0; i--) {
        if (this.testWhite(str.charAt(i))) {
          res = res + [str.slice(0, i), newLineStr].join('');
          str = str.slice(i + 1);
          found = true;
          break;
        }
      }
      // Inserts new line at maxWidth position, the word is too long to wrap
      if (!found) {
        res += [str.slice(0, maxWidth), newLineStr].join('');
        str = str.slice(maxWidth);
      }

    }

    return res + str;
  }

  testWhite(x: any) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
  };
  createChat(user: User) {
    this.selectedUserData = user
  }

  sendMessage(selectedUserData: User) {
    let str = this.wordWrap(this.chatInputMessage.value.selectedUserData, 10);
    let send_to;  
    console.log(selectedUserData.id,"user id is")
    console.log(this.userData.id,"user id is")
    if (this.userData.id==5){
      send_to=8
    }
    else{
      send_to=5
    }
    let data={
      "message":str,
      "sent_by":this.userData.id,
      "send_to":selectedUserData.id
    }
    let data1= JSON.stringify(data)
    console.log(data1)
    this.ws.send(data1)
    const message = "shyam fbjkhfehguirhjuhgkojehguhg  nbfnjm jhbgvf mnjhbvf jhbjhnjkn unbkjnkj  nkjn njk nb implements"
    const message1 = 'bfjkswddsd'
    function countWords(message: string) {
      const arr = message.split(' ');

      return arr

    }

    this.ws.onmessage = async function (event) {
      console.log("websocket is receiving message from server...", event)
      console.log("websocket is receiving message from server actual data is...", event.data)
      let ele = document.getElementById('chat-area')
      let data= JSON.parse(event.data)
      let  message=data.message
      let sent_by = data.sent_by
      console.log(message)
      console.log(sent_by, "sent_by")
     
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
      let str1:string=event.data
      // this.userData = JSON.parse(this.authService.getAuthUserFromCache()) 
      let user:any= localStorage.getItem('authUser')
      console.log(JSON.parse(user).id)
      let current_user_id= JSON.parse(user).id
      
      if(current_user_id==sent_by){
        if (ele != null) {
          ele.innerHTML += "<div style=\"width:100%;display:flex;flex-direction:row-reverse\"><p style=\"background-color:grey;max-width:40%;padding:0px 10px;border-radius:10px;\">" + output + "</p></div>"
          let pixels = ele.clientHeight;
  
          ele.scrollBy(0, pixels);
  
        }
      }
      else{
        if (ele != null) {
          ele.innerHTML += "<div style=\"width:100%;display:flex;flex-direction:row\"><p style=\"background-color:grey;max-width:40%;padding:0px 10px;border-radius:10px;\">" + output + "</p></div>"
          let pixels = ele.clientHeight;
  
          ele.scrollBy(0, pixels);
  
        }
      }
    

    }
    this.chatInputMessage.reset()




  }



}
