import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-fragments',
  templateUrl: './fragments.component.html',
  styleUrls: ['./fragments.component.css']
})
export class FragmentsComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private _headerService:HeaderService) { }

  value:any;

  ngOnInit(): void {
    this._headerService.loader.next(true);
    this.activeRoute.fragment.subscribe((res:any) => {
      this.value = res;
      console.log(this.value);
      this.jumpTo(this.value);
    })
  }

  jumpTo(location:any){
    document.getElementById(location)?.scrollIntoView({behavior: 'smooth'})
  }
}
