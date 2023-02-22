import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/users';
  setData(data: any) {
    return this.http.post(this.url, data);
  }

  getData() {
    return this.http.get(this.url);
  }

  getUserByUsername(user: any) {
    return this.http.get(`${this.url}?username=${user}`);
    // or using HttpParams
    // return this.http.get(this.url, {
    //   params: new HttpParams().set('username', user),
    // });
  }

  getEmailByEmail(email:string){
    return this.http.get(this.url,{
      params: new HttpParams().set('email', email)
    })
  }

  sendOtp(email:string){
    this.http.post(this.url, email);
  }
}
