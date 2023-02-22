import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { user } from '../interface/user.model';

@Injectable({
  providedIn: 'root',
})
export class ManageUserFirebaseService {
  constructor(private http: HttpClient) {}

  url =
    'https://e-commerce-products-gallery-default-rtdb.firebaseio.com/user.json';
  setData(data: user) {
    return this.http.post(this.url, data);
  }
  getData() {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        let array: any = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            array.push({ userId: key, ...res[key] });
          }
        }
        return array;
      })
    );
  }
  deleteUser(userId: any) {
    return this.http.delete(
      'https://e-commerce-products-gallery-default-rtdb.firebaseio.com/user/' +
        userId +
        '.json'
    );
  }
  updateData(userId: any,data:any) {
    return this.http.put(
      'https://e-commerce-products-gallery-default-rtdb.firebaseio.com/user/' +
        userId +
        '.json',data
    );
  }
}
