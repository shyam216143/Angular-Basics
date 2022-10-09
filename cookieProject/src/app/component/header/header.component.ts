import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
loadNotifications(arg0: number) {
throw new Error('Method not implemented.');
}
hasUnseenNotification1() {
throw new Error('Method not implemented.');
}
openSearchDialog() {
throw new Error('Method not implemented.');
}
defaultProfilePhotoUrl: any;
openPostDialog() {
throw new Error('Method not implemented.');
}
  authUser: any;
	isUserLoggedIn: boolean = false;
	isProfilePage: boolean = false;
	notifications: Notification[] = [];
	hasUnseenNotification: boolean = false;
	resultPage: number = 1;
	resultSize: number = 5;
	hasMoreNotifications: boolean = false;
	fetchingResult: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
