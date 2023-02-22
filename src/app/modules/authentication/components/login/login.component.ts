import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private _snackBar: MatSnackBar, private _headerService:HeaderService) { }


  ngOnInit(): void {
    this._headerService.headerNav.next(false);
    this._headerService.welcomeLogOut.next(false);
    this._headerService.logSignUser.next(true);
    this._headerService.loader.next(true);

  }

  ngOnDestroy(): void {
      this._headerService.headerNav.next(true);
      this._headerService.welcomeLogOut.next(true);
      this._headerService.logSignUser.next(false);

  }


  hide = true;

  @HostListener('window:scroll',['$event']) myScroll(){
    console.log('hostListener scroll');
  }

  form = {
    username : '',
    password : ''
  }

  username:any;
  checkValue:any;

formData:any;
  login(form: NgForm){
    if(form.valid){
     if(this.form.username === 'Naman' && this.form.password === 'qwerty'){
      this._headerService.username.next(this.form.username);
      this.route.navigate(['userHome']);
      form.reset;
     }else{
      this._snackBar.open('You have entered an invalid username or password', 'TryAgain');
     }
    }
  else{
    this._snackBar.open('Enter login details correctly', 'Enter');

  }
}

}
