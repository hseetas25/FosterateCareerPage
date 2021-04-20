import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { users } from '../../career/service/users';
import { UserServiceService } from '../../career/service/user-service.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router,private userService:UserServiceService) { }
  userId:number;
  contactLen:number;
  ngOnInit(): void {
    this.gotoContact();
  }

  gotoContact():void
  {
    this.contactLen=users.length;
    if(this.contactLen && this.router.url=='/')
    {
        this.userId=users[0].id;
        this.router.navigate(['home/users/',this.userId]);
    }
    else if(this.contactLen && this.router.url=='/add')
    {
      this.userId=users[0].id;
      this.router.navigate(['home/users/',this.userId]);
    }
    else if(this.contactLen==0)
    {
      this.router.navigate(['home/nocontacts']);
    }
    else
    {
      const userIdFromRoute = Number(this.router.url.charAt(this.router.url.length-1));
      this.router.navigate(['home/users/',userIdFromRoute]);
    }
  }

}
