import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  // FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { DataService } from '../../services/data.service';
import { confirmValidator } from '../../validators/confirmed.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  hide = true;
  show = true;
  formStatus:any;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private _headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this._headerService.headerNav.next(false);
    this._headerService.loader.next(true);
    this._headerService.welcomeLogOut.next(false);
    this._headerService.logSignUser.next(true);
    this.signUpForm.statusChanges.subscribe(res => {
      console.log(res);
      this.formStatus = res;
    })

  }

  ngOnDestroy(): void {
    this._headerService.headerNav.next(true);
    this._headerService.welcomeLogOut.next(true);
    this._headerService.logSignUser.next(false);
  }

  // signUpForm = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   pwd: new FormControl({
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl('')
  //   })

  // });

  signUpForm = this.fb.group(
    {
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
          Validators.pattern('^([a-zA-Z0-9.-@_]+)$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      // Validators.pattern('^([a-z0-9_\.\-]+[@][a-z]+[\.][a-z]+[\.]?[a-z]+?)$')]
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            // '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
            '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{5,}'
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      // aliases: this.fb.array([this.fb.control('')]),
    },
    {
      validator: confirmValidator('password', 'confirmPassword'),
    }
  );

  get formControls() {
    return this.signUpForm.controls;
  }

  get aliases() {
    return this.signUpForm.get('aliases') as FormArray;
  }

  get username() {
    return this.signUpForm.get('username');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  // addAlias() {
  // this.aliases.push(this.fb.control(''));
  // }

  signUp() {
    if (this.signUpForm.valid) {
      // console.log(this._headerService.username)
      this._headerService.username.next(this.username?.value);
      // console.log(this._headerService.username)
      this.addData(this.signUpForm?.value);
      this.dataService
        .setData(this.signUpForm.value)
        .subscribe((arg) => alert('signup successful'));
      this.router.navigate(['/userHome']);
    }
  }

  addData(user:any){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('User') as string);
      users = [users, ...user];
    }else{
      users = [user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }


}
