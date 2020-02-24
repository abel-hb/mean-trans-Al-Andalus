import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aplication } from '../models/aplication';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
// Class and methods
export class AplicationService {
  
  readonly URL_API = 'http://localhost:3500/api/aplication';
  selectedAplication: Aplication;
  aplication: Aplication[];

  constructor(private http: HttpClient) {
    this.selectedAplication = new Aplication();
  }
  getAplication(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(this.URL_API, httpOptions);
  }

  createrAplication(aplication: Aplication){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.URL_API, aplication, httpOptions);
  }

  editAplication(aplication: Aplication){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.put(this.URL_API+`/${aplication._id}`,aplication, httpOptions);
  }

  deletedAplication(aplication: Aplication){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.delete(this.URL_API+`/${aplication._id}`, httpOptions);
  }

}