import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  // private headers  = new HttpHeaders({'content/type': 'application.json'})
  constructor(private http:HttpClient) { }

  url = 'https://e-commerce-products-gallery-default-rtdb.firebaseio.com/products.json';
  
  saveData(data:any){
    // return this.http.post(this.url,data);
    return this.http.put(this.url,data);  
  }

  getData(){
    return this.http.get(this.url);
  }
}
