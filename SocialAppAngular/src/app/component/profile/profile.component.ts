import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  authUser: any;
	profileUserId!: number;
	profileUser: any;
	// profileUserPostResponses: PostResponse[] = [];
	isProfileViewerOwner: boolean = false;
	viewerFollowsProfileUser: boolean = false;
	resultPage: number = 1;
	resultSize: number = 5;
	hasMoreResult: boolean = true;
	fetchingResult: boolean = false;
	loadingProfile: boolean = false;
	hasNoPost: boolean = false;
openViewPhotoDialog(arg0: any) {
throw new Error('Method not implemented.');
}
openPhotoUploadDialog($event: MouseEvent,arg1: string) {
throw new Error('Method not implemented.');
}
  
openFollowerDialog(arg0: any) {
throw new Error('Method not implemented.');
}
loadProfilePosts(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private authService: AuthService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private matDialog: MatDialog,) { }

  ngOnInit(): void {
  }

}
