import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _headerService: HeaderService, private _router: Router) {
    this._headerService.contactDetail.subscribe(res => {
      this.contactDetail = res;
    })
    this._headerService.goBackLink.subscribe(res => {
      this.goBackLink = res;
    });
    this._headerService.goBackLink2.subscribe(res => {
      this.goBackLink2 = res;
    });
    this._headerService.headerNav.subscribe(res => {
      this.headerNav = res;
    })
    this._headerService.welcomeLogOut.subscribe(res => {
      this.welcomeLogOut = res;
    })
     this._headerService.logSignUser.subscribe(res => {
      this.logSignUser = res;
    })
    this._headerService.username.subscribe(res => {
      this.userName = res;
    })
    
   }

  ngOnInit(): void {
  }

  headerLoginBack:boolean = false;
  goBackLink:boolean = false;
  headerNav:boolean = true;
  contactDetail:boolean = false;
  logSignUser:boolean = false;
  welcomeLogOut:boolean = false;
  goBackLink2:boolean = false;
  userName='';

  logout(){
    this.userName = ''
    this._router.navigate(['/login']);
  }
}
