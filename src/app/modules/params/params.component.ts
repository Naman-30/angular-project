import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  constructor(private _headerService:HeaderService) { }

  ngOnInit(): void {
    this._headerService.loader.next(true);
  }

}
