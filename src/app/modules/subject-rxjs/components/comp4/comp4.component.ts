import { Component, OnInit } from '@angular/core';
import { SubService } from '../../services/sub.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private _subService: SubService) {
    this._subService.userName.subscribe(res => this.userName = res);
  }

  ngOnInit(): void {
  }
  userName:any;
  
  onCreate(data:any){
    this._subService.userName.next(data.value);
  }
}
