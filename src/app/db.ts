import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Db {
  private url = "http://localhost:5000/api"
  constructor(private http:HttpClient){}
  getData():Observable<any>{
    return this.http.get(this.url+'/products')
  }
    checkout(cart: any): Observable<any> {
    return this.http.post(this.url+'/checkout', cart);
  }
}
