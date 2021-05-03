import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { HomeComponent } from '../home';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private formBuild: FormBuilder, private router: Router, private userService: UserServiceService) { }

  get control() {
    return this.registerForm.controls;
  }
  static id = 1;
  registerForm: FormGroup;
  headerBlock = true;
  contactBlock = true;
  submitted = false;
  userContacts = this.userService.userContacts;
  contactLen = this.userContacts.length;

  ngOnInit() {
    this.registerForm = this.formBuild.group(
      {
        name: new FormControl('', Validators.required),
        mail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}$')]),
        landline: new FormControl(),
        website: new FormControl(),
        address: new FormControl(),
      });

    if (this.contactLen === 0)
        {
          this.headerBlock = false;
        }
        else
        {
          this.headerBlock = true;
        }
  }

  getData(): void
  {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
    this.registerForm.value.id = AddComponent.id;
    this.userService.addData(this.registerForm.value);
    this.registerForm.reset();
    this.submitted = true;
    this.router.navigate(['/contacts/contact/', AddComponent.id]);
    AddComponent.id += 1;
  }

}
