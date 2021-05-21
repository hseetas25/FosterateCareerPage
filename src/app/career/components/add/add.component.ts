import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { UserContact } from '../../model';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private formBuild: FormBuilder, private router: Router, private userService: UserServiceService, private rBase: AngularFireDatabase) { }

  get control() {
    return this.registerForm.controls;
  }
  id:number;
  registerForm: FormGroup;
  headerBlock = true;
  contactBlock = true;
  submitted = false;
  userContacts:UserContact[];
  contactLen:number;
  loader:boolean = true;
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
      this.userService.getData().subscribe(array=>{
        this.userContacts=array;
        this.loader=false;
        if (this.userContacts.length === 0)
        {
          this.headerBlock = false;
        }
        else
        {
          this.headerBlock = true;
        }
      })
      this.userService.pushData();
  }

  getData(): void
  {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
    this.registerForm.value.id = this.userContacts.length+1;
    this.id = this.userContacts.length+1;
    this.userService.addData(this.registerForm.value);
    this.registerForm.reset();
    this.submitted = true;
    this.router.navigate(['/contacts/', this.id]);
  }

}
