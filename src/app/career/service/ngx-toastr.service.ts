import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NgxToastrService {

  constructor(private toastr:ToastrService) { }

  success(str1:string, str2:string):void{
    this.toastr.success(str1,str2);
  }
  warning(str1:string, str2:string):void{
    this.toastr.warning(str1,str2);
  }
  error(str1:string, str2:string):void{
    this.toastr.error(str1,str2);
  }
}
