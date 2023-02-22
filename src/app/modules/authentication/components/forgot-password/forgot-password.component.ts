import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit,OnDestroy {

  constructor(private _headerService:HeaderService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._headerService.loader.next(true);
    this._headerService.headerNav.next(false);
    this._headerService.welcomeLogOut.next(false);
    this._headerService.logSignUser.next(true);
    this.emailForm = this.fb.group({
      email: new FormControl('')
    })
  }

  get email(){
    return this.emailForm.get('email');
  }

  ngOnDestroy(): void {
      this._headerService.headerNav.next(true);
      this._headerService.welcomeLogOut.next(true);
      this._headerService.logSignUser.next(false);
  }
  btnValue:any;

  emailForm: any;


  submitEmail(form:any){
    if(this.email.errors?.['invalidEmail']){
      console.log(this.email.value)
      alert('otp send to email');
    }
  }
}
