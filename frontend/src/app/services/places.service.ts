import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Places } from '../models/places';
import { HttpHeaders } from '@angular/common/http';



@Injectable()

// Class and methods
export class PlacesService {
  
  readonly URL_API = 'http://localhost:3500/api/places';
  selectedPlace: Places;
  place: Places[];

  constructor(private http: HttpClient) {
    this.selectedPlace = new Places();
  }
  getPlace(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(this.URL_API, httpOptions);
  }

  createrPlace(place: Places){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.URL_API, place, httpOptions);
  }

  editPlace(place: Places){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.put(this.URL_API+`/${place._id}`,place, httpOptions);
  }

  deletedPlace(place: Places){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.delete(this.URL_API+`/${place._id}`, httpOptions);
  }

}