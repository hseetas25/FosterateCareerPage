import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';
import { UserType } from '../../model/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userContacts=this.userService.userContacts;
  length=Number(this.router.url.length-1);
  userId:number;
  contactBlock:boolean=true;
  imageBlock:boolean=true;
  formBlock:boolean=false;
  userContactActive:UserType;
  constructor(private router:Router,private fb:FormBuilder,public userService:UserServiceService) { }
  presentData()
  {
    this.userContactActive=this.userService.presentData1();
  }
  id:number;
  editForm:FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    const userIdFromRoute = Number(this.router.url.charAt(this.router.url.length-1));
    this.id=userIdFromRoute;
    this.presentData();
    this.editForm=this.fb.group(
      {
        name:new FormControl('',Validators.required),
        mail:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        number:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}$')]),
        landline:new FormControl(),
        website:new FormControl(),
        address:new FormControl(),
        id:new FormControl()
      });
  }
  get control() { return this.editForm.controls; }
  deleteDetails()
  {
    this.userService.deleteDetails1();
    this.userContactActive=this.userService.userContacts[0];
  }
  editDetails()
  {
    this.contactBlock=false;
    this.imageBlock=false;
    this.formBlock=true;
    length=Number(this.router.url.length-1);
    const userIdFromRoute = Number(this.router.url.charAt(length));
    this.userId=this.userContacts.findIndex(userContact1 => userContact1.id===userIdFromRoute);
    this.editForm.patchValue({
      name:this.userContacts[this.userId].name,
      mail:this.userContacts[this.userId].mail,
      number:this.userContacts[this.userId].number,
      landline:this.userContacts[this.userId].landline,
      website:this.userContacts[this.userId].website,
      address:this.userContacts[this.userId].address
    })
  }
  editData()
  {
   this.submitted=true;
   if(this.editForm.invalid)
    return
    length=Number(this.router.url.length-1);
    const userIdFromRoute = Number(this.router.url.charAt(length));
    this.userId=this.userContacts.findIndex(userContact1 => userContact1.id===userIdFromRoute);
    this.editForm.value.id=userIdFromRoute;
    this.userContacts.splice(this.userId,1,this.editForm.value);
    this.editForm.reset();
    this.presentData();
    this.contactBlock=true;
    this.imageBlock=true;
    this.formBlock=false;
  }
}
