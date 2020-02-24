import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeTrans } from '../models/type-trans';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class TypeTransService {
  readonly URL_API = 'http://localhost:3500/api/type_trans';
  selectedTypeTrans: TypeTrans;
  typeTrans: TypeTrans[];

  constructor(private http: HttpClient) {
    this.selectedTypeTrans = new TypeTrans();
  }

  getTypeTran(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(this.URL_API, httpOptions);
  }

  createrTypeTran(typeTrans: TypeTrans){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.URL_API, typeTrans, httpOptions);
  }

  editTypeTran(typeTrans: TypeTrans){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.put(this.URL_API+`/${typeTrans._id}`,typeTrans, httpOptions);
  }

  deletedTypeTran(typeTrans: TypeTrans){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.delete(this.URL_API+`/${typeTrans._id}`,httpOptions);
  }
}

