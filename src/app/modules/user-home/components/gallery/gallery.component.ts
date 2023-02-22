import { Component, OnInit } from '@angular/core';
import { GalleryItems } from 'src/app/DataModel/gallery';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryItems: GalleryItems, private _headerService: HeaderService) { }

  galleryData: any = [];
  ngOnInit(): void {
    this._headerService.loader.next(true);
    this.galleryData = this.galleryItems.galleryImages;
  }

}
