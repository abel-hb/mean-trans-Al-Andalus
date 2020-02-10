import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transport } from '../models/transport';

@Injectable()
export class TransportService {
  
  readonly URL_API = 'http://localhost:3500/api/transport';
  selectedTransport: Transport;
  transport: Transport[];

  constructor(private http: HttpClient) {
    this.selectedTransport = new Transport();
  }
  getTransport(){
    return this.http.get(this.URL_API);
  }

  createrTransport(transport: Transport){
    return this.http.post(this.URL_API, transport);
  }

  editTransport(transport: Transport){
    return this.http.put(this.URL_API+`/${transport._id}`,transport);
  }

  deletedTransport(transport: Transport){
    return this.http.delete(this.URL_API+`/${transport._id}`);
  }

}
