import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {users} from '../../career/service/users';
import {UserServiceService} from '../../career/service/user-service.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private us:UserServiceService) { }
  userId:number;
  ngOnInit(): void {
    this.gotoContact();
  }

  gotoContact()
  {
    if(users.length && this.router.url=='/')
    {
        this.userId=users[0].id;
        this.router.navigate(['home/users/',this.userId]);
    }
    else if(users.length && this.router.url=='/add')
    {
      this.userId=users[0].id;
      this.router.navigate(['home/users/',this.userId]);
    }
    else if(users.length==0)
    {
      console.log(this.router.url)
      this.router.navigate(['home/nocontacts']);
    }
    else
    {
      const userIdFromRoute = Number(this.router.url.charAt(this.router.url.length-1));
      this.router.navigate(['home/users/',userIdFromRoute]);
    }
  }

}
