import { Component, OnInit } from '@angular/core';
import { AplicationService } from '../../services/aplication.service';
import { NgForm } from '@angular/forms';
import { Aplication } from 'src/app/models/aplication';

declare var M: any;

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.css']
})
export class AplicationComponent implements OnInit {

  constructor(private aplicationServices: AplicationService) { }

  ngOnInit() {
      this.getAplications();
  }

  addAplications(form: NgForm){
    if(form.value._id){
      this.aplicationServices.createrAplication(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Aplication updated successfully.'});
        this.getAplications();
      });
    }else{
      this.aplicationServices.createrAplication(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Aplication saved successfully.'});
      });
    }
  }

  deleteAplications(_id: Aplication){
    if(confirm('Are you sure want delete it')){
      this.aplicationServices.deletedAplication(_id)
      .subscribe(res => {
        this.getAplications();
        M.toast({html: 'Aplication deleted successfully.'});
      });
    }
  }

  editAplications(aplication: Aplication){
    this.aplicationServices.selectedAplication = aplication;
  }

  getAplications(){
    this.aplicationServices.getAplication()
    .subscribe(res => {
      this.aplicationServices.aplication = res as Aplication[];
      console.log(res);
    })
  }

  resetForm(form: NgForm){
    if(form){
      form.reset();
      this.aplicationServices.selectedAplication = new Aplication();
    }
  }


}
