import { Injectable } from '@angular/core';
import { users } from './users';
import { UserContact } from '../model';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  userContacts: UserContact[] = users;
  contactLen: number = users.length;
  userId: number;

  activeData(activeId: number): UserContact
  {
    this.userId = this.userContacts.findIndex(userContact1 => userContact1.id === activeId);
    return (this.userContacts[this.userId]);
  }

  deleteDetails(userId: number): void
  {
    this.userContacts.splice(userId, 1);
  }

  addData(data: UserContact): void
  {
    let newContact=new UserContact(data);
    if (newContact){
      users.push(newContact);
    }
  }

  sendData(): {userList: Array<UserContact> , status: boolean } {
    if (this.userContacts.length === 0) {
      return {userList : null , status : false};
    }
    else {
      return {userList : this.userContacts , status : true};
    }
  }
}
