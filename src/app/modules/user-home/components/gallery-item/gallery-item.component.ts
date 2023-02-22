import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItems } from 'src/app/DataModel/gallery';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  constructor(private _headerService:HeaderService, private galleryItem: GalleryItems, private activeRoute: ActivatedRoute) { }

  galleryData:any = []
  id:any;
  ngOnInit(): void {
    this._headerService.goBackLink2.next(true);
    this._headerService.headerNav.next(false);
    this.galleryData = this.galleryItem.galleryImages;
    console.log(this.galleryData)
    this.activeRoute.params.subscribe((res:Params) => {
      this.id = res["id"];
      this.selectedItem = this.galleryData[this.id-1];
    })

  }

  ngOnDestroy(): void {
    this._headerService.loader.next(true);
      this._headerService.goBackLink2.next(false);
      this._headerService.headerNav.next(true);
      }

  selectedItem:any;

}
