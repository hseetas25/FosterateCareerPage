import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserContact } from 'src/app/career/model';
import { UserServiceService } from 'src/app/career/service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private userService:UserServiceService) { }
  userId: number;
  contactLen: number;
  userContacts:UserContact[];
  ngOnInit(): void {
    this.userService.getData().subscribe(array=>{
      this.userContacts=array;
      this.contactLen = this.userContacts.length;
    if (this.contactLen && (this.router.url === '/contacts/NaN' || this.router.url === '/contacts/nocontacts' || this.router.url === '/'))
    {
        this.userId = this.userContacts[0].id;
        this.router.navigate(['contacts/', this.userId]);
    }
    else if (this.contactLen && this.router.url === '/contacts')
    {
      this.userId = this.userContacts[this.contactLen - 1].id;
      this.router.navigate(['contacts/', this.userId]);
    }
    else if (this.contactLen === 0)
    {
      this.router.navigate(['contacts/nocontacts']);
    }
    else
    {
      const userIdFromRoute = Number(this.router.url.charAt(this.router.url.length - 1));
      this.router.navigate(['contacts/', userIdFromRoute]);
    }
    })
  }  
}
