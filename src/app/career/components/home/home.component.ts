import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { UserContact } from '../../model/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, public userService: UserServiceService) {
  }

  get control() { return this.editForm.controls; }
  static id = 0;

  userContacts = this.userService.userContacts;
  userId: number;
  contactBlock = true;
  imageBlock = true;
  formBlock = false;
  userContactActive: UserContact;
  activeId = 0;
  id: number;
  editForm: FormGroup;
  submitted = false;
  contactLen: number;

  ngOnInit(): void {
    this.editForm = this.fb.group(
      {
        name: new FormControl('', Validators.required),
        mail: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}$')]),
        landline: new FormControl(),
        website: new FormControl(),
        address: new FormControl(),
        id: new FormControl()
      });
      this.userId = this.userContacts.findIndex(userContact1 => userContact1.id === this.userContacts[this.userContacts.length-1].id);
      this.userContactActive = this.userContacts[this.userId];
  }

  activeData(requiredId: number)
  {
    this.activeId = requiredId;
    this.userContactActive = this.userService.activeData(requiredId);
  }

  deleteDetails()
  {

    this.userId = this.getId();
    this.userService.deleteDetails(this.userId);
    if (this.userContacts.length)
    {
      this.userId = this.userContacts[this.userContacts.length - 1].id;
      this.router.navigate(['contacts/contact/', this.userId]);
    }
    else{
      this.router.navigate(['contacts/nocontacts']);
    }
    this.userContactActive = this.userService.userContacts[this.userContacts.length - 1];
  }

  editDetails()
  {
    this.contactBlock = false;
    this.imageBlock = false;
    this.formBlock = true;
    this.userId = this.getId();
    this.editForm.patchValue({
      name: this.userContacts[this.userId].name,
      mail: this.userContacts[this.userId].mail,
      number: this.userContacts[this.userId].number,
      landline: this.userContacts[this.userId].landline,
      website: this.userContacts[this.userId].website,
      address: this.userContacts[this.userId].address
    });
  }

  editData(): void
  {
   this.submitted = true;
   if (this.editForm.invalid) {
    return;
   }
   this.userId = this.getId();
   length = Number(this.router.url.length - 1);
   const userIdFromRoute = Number(this.router.url.charAt(length));
   this.editForm.value.id = userIdFromRoute;
   this.userContacts.splice(this.userId, 1, this.editForm.value);
   this.userContactActive = this.userContacts[this.userId];
   this.editForm.reset();
   this.contactBlock = true;
   this.imageBlock = true;
   this.formBlock = false;
  }

  getId(): number{
   length = Number(this.router.url.length - 1);
   const userIdFromRoute = Number(this.router.url.charAt(length));
   this.userId = this.userContacts.findIndex(userContact1 => userContact1.id === userIdFromRoute);
   return this.userId;
  }
}
