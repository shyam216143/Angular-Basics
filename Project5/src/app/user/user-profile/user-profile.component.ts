import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profiledata?:Profile;
  constructor(private profileServices:ProfileService) { 
    this.profileServices.getProfileData().subscribe(data=>{
      this.profiledata=data
    })
    
  }

  ngOnInit(): void {
    
  }

}
