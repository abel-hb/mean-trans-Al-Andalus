import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Places } from '../models/places';

@Injectable()
export class PlacesService {
  
  readonly URL_API = 'http://localhost:3500/api/places';
  selectedPlace: Places;
  place: Places[];

  constructor(private http: HttpClient) {
    this.selectedPlace = new Places();
  }
  getPlace(){
    return this.http.get(this.URL_API);
  }

  createrPlace(place: Places){
    return this.http.post(this.URL_API, place);
  }

  editPlace(place: Places){
    return this.http.put(this.URL_API+`/${place._id}`,place);
  }

  deletedPlace(place: Places){
    return this.http.delete(this.URL_API+`/${place._id}`);
  }

}