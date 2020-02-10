import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeTrans } from '../models/type-trans';

@Injectable()
export class TypeTransService {
  readonly URL_API = 'http://localhost:3500/api/type_trans';
  selectedTypeTrans: TypeTrans;
  typeTrans: TypeTrans[];

  constructor(private http: HttpClient) {
    this.selectedTypeTrans = new TypeTrans();
  }

  getTypeTran(){
    return this.http.get(this.URL_API);
  }

  createrTypeTran(typeTrans: TypeTrans){
    return this.http.post(this.URL_API, typeTrans);
  }

  editTypeTran(typeTrans: TypeTrans){
    return this.http.put(this.URL_API+`/${typeTrans._id}`,typeTrans);
  }

  deletedTypeTran(typeTrans: TypeTrans){
    return this.http.delete(this.URL_API+`/${typeTrans._id}`);
  }
}

