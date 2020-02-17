import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aplication } from '../models/aplication';

@Injectable()
export class AplicationService {
  
  readonly URL_API = 'http://localhost:3500/api/aplication';
  selectedAplication: Aplication;
  aplication: Aplication[];

  constructor(private http: HttpClient) {
    this.selectedAplication = new Aplication();
  }
  getAplication(){
    return this.http.get(this.URL_API);
  }

  createrAplication(aplication: Aplication){
    return this.http.post(this.URL_API, aplication);
  }

  editAplication(aplication: Aplication){
    return this.http.put(this.URL_API+`/${aplication._id}`,aplication);
  }

  deletedAplication(aplication: Aplication){
    return this.http.delete(this.URL_API+`/${aplication._id}`);
  }

}