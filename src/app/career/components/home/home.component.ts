import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {UserServiceService} from '../../service/user-service.service';
import { UserType } from '../../model/user-type.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userContacts=this.us.userContacts;
  length=Number(this.router.url.length-1);
  userId:number;
  userContact1:UserType;
  constructor(private router:Router,private route:ActivatedRoute,private fb:FormBuilder,public us:UserServiceService) { }
  presentData()
  {
    this.userContact1=this.us.presentData1();
    //console.log(this.userContact1);
  }
  id:number;
  editForm:FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    const userIdFromRoute = Number(this.router.url.charAt(this.router.url.length-1));
    this.id=userIdFromRoute;
    this.presentData();
    this.removeForm();
    this.editForm=this.fb.group(
      {
        name:new FormControl('',Validators.required),
        mail:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        number:new FormControl('',[Validators.required,Validators.minLength(10)]),
        landline:new FormControl(),
        website:new FormControl(),
        address:new FormControl(),
        id:new FormControl()
      });
  }
  get f() { return this.editForm.controls; }
  deleteDetails()
  {
    this.userContact1=this.us.deleteDetails1();
  }
  editDetails()
  {
    var main=<HTMLElement>document.querySelector(".mainContact");
    var icon=<HTMLElement>document.querySelector(".imageIcon");
    main.style.visibility="hidden";
    icon.style.visibility="hidden";
    main.style.marginLeft="-500px";
    var form=<HTMLElement>document.querySelector(".contactDetails");
    form.style.visibility="visible";
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
  displayDetails(d:any)
  {
  }
  removeForm()
  {
    var form=<HTMLElement>document.querySelector(".contactDetails");
    form.style.visibility="hidden";
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
    this.removeForm();
    var main=<HTMLElement>document.querySelector(".mainContact");
    var icon=<HTMLElement>document.querySelector(".imageIcon");
    main.style.visibility="visible";
    icon.style.visibility="visible";
    main.style.marginLeft="0px";
    this.presentData();
  }
}
