import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _headerService:HeaderService) { }

  ngOnInit(): void {
    this._headerService.headerNav.next(false);
    this._headerService.logSignUser.next(true);
    this._headerService.welcomeLogOut.next(false);
  }

  ngOnDestroy(): void {
      this._headerService.headerNav.next(true);
      this._headerService.logSignUser.next(false);
      this._headerService.welcomeLogOut.next(true);
  }
}
