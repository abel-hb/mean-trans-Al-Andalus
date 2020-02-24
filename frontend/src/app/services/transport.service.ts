import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transport } from '../models/transport';
import { HttpHeaders } from '@angular/common/http';



@Injectable()

// Class and methods
export class TransportService {
  
  readonly URL_API = 'http://localhost:3500/api/transport';
  selectedTransport: Transport;
  transport: Transport[];

  constructor(private http: HttpClient) {
    this.selectedTransport = new Transport();
  }
  getTransport(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(this.URL_API, httpOptions);
  }

  createrTransport(transport: Transport){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.URL_API, transport, httpOptions);
  }

  editTransport(transport: Transport){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.put(this.URL_API+`/${transport._id}`,transport, httpOptions);
  }

  deletedTransport(transport: Transport){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.delete(this.URL_API+`/${transport._id}`, httpOptions);
  }

}
