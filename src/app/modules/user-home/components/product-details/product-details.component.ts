import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsItems } from 'src/app/DataModel/products';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  constructor(private _headerService:HeaderService, private productsData: ProductsItems, private activeRoute: ActivatedRoute) { }

  productsArray:any;
  selectedItem:any;
  id:any;
  ngOnInit(): void {
    this._headerService.goBackLink.next(true);
    this._headerService.headerNav.next(false);
    this.productsArray = this.productsData.ProductsArray;
    // console.log(this.productsArray)
    this.activeRoute.params.subscribe((res:Params) => {
      this.id = res['pid'];
      // console.log(this.id)

    })

    this.selectedItem = this.productsArray[this.id-1];
      // console.log(this.selectedItem)
  }

  ngOnDestroy(): void {
    this._headerService.loader.next(true);
      this._headerService.goBackLink.next(false);
      this._headerService.headerNav.next(true);


  }
}
