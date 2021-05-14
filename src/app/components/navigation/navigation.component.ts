import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../../career/service/users';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }
  userId: number;
  contactLen: number;
  ngOnInit(): void {
    this.goToContact();
  }

  goToContact(){
    this.contactLen = users.length;
    if (this.contactLen && this.router.url === '/')
    {
        this.userId = users[0].id;
        this.router.navigate(['contacts/', this.userId]);
    }
    else if (this.contactLen && this.router.url === '/add')
    {
      this.userId = users[users.length - 1].id;
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
  }

}
