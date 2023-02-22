import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, OnDestroy {

  constructor(private _headerService:HeaderService) { }

  ngOnInit(): void {
    this._headerService.loader.next(true);
    this._headerService.contactDetail.next(true);
    this._headerService.welcomeLogOut.next(false);

  }

  ngOnDestroy(): void {
      this._headerService.contactDetail.next(false);
      this._headerService.welcomeLogOut.next(true);
  }

}
