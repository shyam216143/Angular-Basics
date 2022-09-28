import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from './services/user-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnChanges{



  title = 'Project5';

  constructor(private userService: UserServicesService, private router: Router){
  }
  ngOnInit(): void {
    return
  }
  ngOnChanges(changes: SimpleChanges): void {
   
}
is_Authenticated():Boolean {
   return this.userService.is_Authenticated
  }
  logout() {
    this.userService.logout().subscribe((apiResponse:any)=>{
      if(apiResponse && apiResponse.id>0){
        localStorage.removeItem('myToken')
        this.router.navigate(['/user/login'],{queryParams:{"msg":"successfully Logged"}})

      }

    })

    // this.userService.logout();
    // return this.router.navigate(['/user/login'],{queryParams:{"msg":"successfully Logged"}});
    }
}