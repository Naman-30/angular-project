import { Component, OnInit } from '@angular/core';
import { SubService } from '../../services/sub.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
