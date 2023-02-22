import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loadingBar:LoadingBarService, private _headerService: HeaderService){}
  value:any;

ngOnInit(): void {
   this._headerService.loader.subscribe((res:any) => {
    this.progressBar(res);
   })

}

  progressBar(value:any){
    this.startLoading();
    setTimeout(() => {
      this.stopLoading()
    }, 1000);

  }

startLoading() {
  this.loadingBar.start();
}

stopLoading() {
  this.loadingBar.complete();
}
}
