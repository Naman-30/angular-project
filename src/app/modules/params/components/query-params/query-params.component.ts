import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css']
})
export class QueryParamsComponent implements OnInit {

  data:any;
  condition:any;

  constructor(private activeRoute: ActivatedRoute, private _headerService:HeaderService) { }

  ngOnInit(): void {
    this._headerService.loader.next(true);
    this.activeRoute.queryParamMap.subscribe((res:any) => {
      this.data = res;
      this.condition = res.get('editMode')
    })
  }

}
