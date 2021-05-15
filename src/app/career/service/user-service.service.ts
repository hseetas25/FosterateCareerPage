import { Injectable } from '@angular/core';
import { UserContact } from '../model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private firestore:AngularFirestore) { }
  userContacts: UserContact[];
  userId: number;

  activeData(activeId: number): UserContact
  {
    this.userId = this.userContacts.findIndex(userContact1 => userContact1.id === activeId);
    return (this.userContacts[this.userId]);
  }

  deleteDetails(userId: number, key:string): Observable<any>
  {
    this.userContacts.splice(userId, 1);
    return new Observable<any>((sub)=>{
      this.firestore.collection('contacts').doc(key).delete().then(()=>{
        sub.next({isSuccessful:true});
        this.pushData();
      },(reason)=>{
        sub.next({isSuccessful:false,reason})
      }).catch((err)=>{
        sub.next({isSuccessful:false,err});
      })
    })
  }

  addData(data: UserContact): void
  {
    let newContact=new UserContact(data);
    if (newContact){
      this.firestore.collection('contacts').add(data);
      this.pushData();
    }
  }

  getData(){
    const contactList=new Array<UserContact>();
    return new Observable<any>((sub)=>{
      const contactDetailRef = this.firestore.collection('contacts').get().subscribe((contacts)=>{
        if(contacts){
          contacts.forEach((contact)=>{
            const currContact = contact.data() as UserContact;
            currContact['key'] = contact.id;
            contactList.push(currContact);
          });
          sub.next(contactList);
        }
        if(contactDetailRef){
          contactDetailRef.unsubscribe();
        }
      })
    })
  }

  pushData():void{
    this.getData().subscribe(array=>{
      this.userContacts=array;
    })
  }

  updateData(userData:UserContact,key:string):Observable<any>{
    const currContact=JSON.parse(JSON.stringify(userData));
    console.log(currContact);
    return new Observable<any>((sub)=>{
      this.firestore.collection('contacts').doc(key).set(currContact).then(()=>{
        sub.next({isSuccessful:true});
        this.pushData();
      },(reason)=>{
        sub.next({isSuccessful:false,reason})
      }).catch((err)=>{
        sub.next({isSuccessful:false,err});
      })
    })
  }

}
