import { Component, OnInit } from '@angular/core';
import { ProductsItems } from 'src/app/DataModel/products';
import { productType } from 'src/app/Interface/productType';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-procucts',
  templateUrl: './procucts.component.html',
  styleUrls: ['./procucts.component.css']
})
export class ProcuctsComponent implements OnInit {

  constructor(private productsArray: ProductsItems, private _headerService:HeaderService) { }

  productsData:any;
  ngOnInit(): void {
    this._headerService.loader.next(true);
    this.productsData = this.productsArray.ProductsArray;
  }

}
