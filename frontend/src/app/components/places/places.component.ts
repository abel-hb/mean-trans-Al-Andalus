import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { NgForm } from '@angular/forms';
import { Places } from 'src/app/models/places';

declare var M: any;

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(private placesServices: PlacesService) { }

  ngOnInit() {
    this.getPlaces();
  }

  addPlaces(form: NgForm){
    if(form.value._id){
      this.placesServices.createrPlace(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Places updated successfully.'});
        this.getPlaces();
      });
    }else{
      this.placesServices.createrPlace(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Places saved successfully.'});
      });
    }
  }

  deletePlaces(_id: Places){
    if(confirm('Are you sure want delele it')){
      this.placesServices.deletedPlace(_id)
      .subscribe(res => {
        this.getPlaces();
        M.toast({html: 'Places deleted successfully.'});
      });
    }
  }

  editPlaces(place: Places){
    this.placesServices.selectedPlace = place;
  }

  getPlaces(){
    this.placesServices.getPlace()
    .subscribe(res => {
      this.placesServices.place = res as Places[];
    })
  }

  resetForm(form: NgForm){
    if(form){
      form.reset();
      this.placesServices.selectedPlace = new Places();
    }
  }

}
