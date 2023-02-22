import { Component, OnInit } from '@angular/core';
import { SubService } from '../../services/sub.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _subService: SubService) { 
    this._subService.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {
  }

  userName:any;

  onCreate(data:any){
    this._subService.userName.next(data.value);
  }
}
