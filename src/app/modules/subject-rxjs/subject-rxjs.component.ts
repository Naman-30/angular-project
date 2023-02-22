import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-subject-rxjs',
  templateUrl: './subject-rxjs.component.html',
  styleUrls: ['./subject-rxjs.component.css']
})
export class SubjectRxjsComponent implements OnInit {

  constructor(private _headerService:HeaderService) { }

  ngOnInit(): void {
    this._headerService.loader.next(true);
  }

}
