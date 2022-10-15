import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AppConstants } from 'src/app/common/app-constants';
import { UserResponse } from 'src/app/model/user-response';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';
import { SnakebarComponent } from '../snakebar/snakebar.component';

@Component({
  selector: 'app-following-follower-list-dialog',
  templateUrl: './following-follower-list-dialog.component.html',
  styleUrls: ['./following-follower-list-dialog.component.css']
})
export class FollowingFollowerListDialogComponent implements OnInit {
  userResponseList: UserResponse[] = [];
	resultPage: number = 1;
	resultSize: number = 5;
	hasMoreResult: boolean = false;
	fetchingResult: boolean = false;
	defaultProfilePhotoUrl = environment.defaultProfilePhotoUrl1;
	private subscriptions: Subscription[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
		private userService: UserService,
		private matSnackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadUsers(1);
  }

  ngOnDestroy(): void {
	this.subscriptions.forEach(sub => sub.unsubscribe());
}
  
	
  loadUsers(currentPage: number): void {
	if (!this.fetchingResult) {
		if (this.data.type === 'following') {
			if (this.data.user.following_count > 0) {
				this.fetchingResult = true;

				this.subscriptions.push(
					this.userService.getUserFollowingList(this.data.user.id, currentPage, this.resultSize).subscribe({
						next: (followingList: UserResponse[]|any) => {
							console.log(followingList);
							followingList.list.forEach((uR:any) =>{
								console.log(uR);
								this.userResponseList.push(uR)
							});
							if (currentPage * this.resultSize < this.data.user.following_count) {
								this.hasMoreResult = true;
							} else {
								this.hasMoreResult = false;
							}
							this.resultPage++;
							this.fetchingResult = false;
						},
						error: (errorResponse: HttpErrorResponse) => {
							this.matSnackbar.openFromComponent(SnakebarComponent, {
								data: AppConstants.snackbarErrorContent,
								panelClass: ['bg-danger'],
								duration: 5000
							});
							this.fetchingResult = false;
						}
					})
				);
			}
		} else if (this.data.type === 'follower') {
			if (this.data.user.follower_count > 0) {
				this.fetchingResult = true;

				this.subscriptions.push(
					this.userService.getUserFollowerList(this.data.user.id, currentPage, this.resultSize).subscribe({
						next: (followerList: UserResponse[]|any) => {
							followerList.list.forEach((uR:any) => this.userResponseList.push(uR));
							console.log(followerList.list)
							if (currentPage * this.resultSize < this.data.user.follower_count) {
								this.hasMoreResult = true;
							} else {
								this.hasMoreResult = false;
							}
							this.resultPage++;
							this.fetchingResult = false;
						},
						error: (errorResponse: HttpErrorResponse) => {
							this.matSnackbar.openFromComponent(SnakebarComponent, {
								data: AppConstants.snackbarErrorContent,
								panelClass: ['bg-danger'],
								duration: 5000
							});
							this.fetchingResult = false;
						}
					})
				);
			}
		}
	}
}
}
