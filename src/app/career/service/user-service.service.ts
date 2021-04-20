import { Injectable } from '@angular/core';
import { users } from './users';
import { UserType } from '../model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private router:Router) { }
  userContacts:UserType[]=users;
  contactLen:number=users.length;
  userId:number;
  presentData1():UserType
  {
    this.userId=this.getUrlId();
    return (this.userContacts[this.userId]);
  }
  deleteDetails1():void
  {
    this.userId=this.getUrlId();
    this.userContacts.splice(this.userId,1);
    if(users.length)
    {
      this.userId=this.userContacts[0].id;
      this.router.navigate(['home/users/',this.userId]);
    }
    else{
      this.router.navigate(['home/nocontacts']);
    }
  }
  getData(data:UserType):void
  {
    if(data){
      users.push(data);
    }
    else{
      console.log("Empty data");
    }
  }
  getUrlId():number
  {
    length=Number(this.router.url.length-1);
    const userIdFromRoute = Number(this.router.url.charAt(length));
    this.userId= this.userContacts.findIndex(userContact1 => userContact1.id===userIdFromRoute);
    return this.userId;
  }
  sendData():{userList:Array<UserType>;status:boolean } {
    if (this.userContacts.length==0) {
      return {userList:null,status:false};
    } else {
      return {userList:this.userContacts,status:true};
    }
  }
}
