import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { FirebaseDataService } from './services/firebase-data.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {
  fetching = false;
  updateMode = false;
  updateIndex:any;
  constructor(private _firebaseDataService: FirebaseDataService, private _headerService: HeaderService) {}

  ngOnInit(): void {
    this._headerService.loader.next(true);
    this.fetchProducts();
  }
  arrayOfData: any = [];

  addProducts(a: any, b: any, c: any) {
    if(this.updateMode){
      this.arrayOfData[this.updateIndex] = {
        id: a.value,
        name: b.value,
        price: c.value,
      }
      this.updateMode = false
      this.id.nativeElement.value = ''
    this.name.nativeElement.value = ''
    this.price.nativeElement.value = ''
    }else{
      this.arrayOfData?.push({
        id: a.value,
        name: b.value,
        price: c.value,
      });
    }
   this.saveData();
  }
  removeData(i: number) {
    if (confirm('Are you sure you want to delete ?')) {
      this.arrayOfData.splice(i, 1);
      this.saveData();
    }
  }

  saveData() {
    this._firebaseDataService.saveData(this.arrayOfData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  fetchProducts() {
    this.fetching = true;
    this._firebaseDataService.getData().subscribe((res) => {
      console.log(res);
      this.arrayOfData = res;
      this.fetching = false;
    });
  }

  @ViewChild('id') id:any;
  @ViewChild('name') name:any;
  @ViewChild('price') price:any;

  editData(i:number){
    this.updateIndex = i;
    this.updateMode = true
    console.log(this.arrayOfData[i]);
    this.id.nativeElement.value = this.arrayOfData[i].id;
    this.name.nativeElement.value = this.arrayOfData[i].name;
    this.price.nativeElement.value = this.arrayOfData[i].price;
  }
}
