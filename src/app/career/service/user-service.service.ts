import { Injectable } from '@angular/core';
import { users } from './users';
import {UserType} from '../model/user-type.model';
import {Router,ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private router:Router,private route:ActivatedRoute) { }
  userContacts:UserType[]=users;
  userId:number;
  a:UserType;
  presentData1():UserType
  {
    length=Number(this.router.url.length-1);
    const userIdFromRoute = Number(this.router.url.charAt(length));
    this.userId= this.userContacts.findIndex(userContact1 => userContact1.id===userIdFromRoute);
    //console.log(userIdFromRoute, this.userContact1)
    return (this.userContacts[this.userId]);
  }
  deleteDetails1():UserType
  {
    length=Number(this.router.url.length-1);
    const userIdFromRoute = Number(this.router.url.charAt(length));
    this.userId=this.userContacts.findIndex(userContact1 => userContact1.id===userIdFromRoute);
    this.userContacts.splice(this.userId,1);
    if(users.length)
    {
      this.userId=this.userContacts[0].id;
      this.router.navigate(['home/users/',this.userId]);
      this.a=this.userContacts[0];
      return this.a;
    }
    else{
      this.router.navigate(['home/nocontacts']);
      return null;
    }
  }
  getData(data:UserType):UserType[]|boolean
  {
      users.push(data);
      var nousers:UserType[];
      if(users.length)
        return users && true;
      else
        return nousers && false;
  }
}
