import { Component, OnInit } from '@angular/core';
import { TypeTransService } from '../../services/type-trans.service';
import { NgForm } from '@angular/forms';
import { TypeTrans } from 'src/app/models/type-trans';

declare var M: any;

@Component({
  selector: 'app-type-trans',
  templateUrl: './type-trans.component.html',
  styleUrls: ['./type-trans.component.css']
})

// Class and methods
export class TypeTransComponent implements OnInit {

  constructor(private typeTransServices: TypeTransService) { }

  ngOnInit() {
    this.getTypeTrans()
  }

  addTypeTrans(form: NgForm){
    if (form.value._id){
      this.typeTransServices.editTypeTran(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Type Trans updated successfully.'});
        this.getTypeTrans();
      });
    }else{
      this.typeTransServices.createrTypeTran(form.value)
      .subscribe(res => {
        M.toast({html: 'Type Trans saved successfully.'});
        this.getTypeTrans();
      });
    }
  }


  deleteTypeTrans(_id: TypeTrans){
    if(confirm('Are you sure want delete it?')){
      this.typeTransServices.deletedTypeTran(_id)
      .subscribe(res => {
        this.getTypeTrans();
        M.toast({html: 'Type Trans deleted successfully.'});
      });
    }
  }

  editTypeTrans(typeTrans: TypeTrans){
    this.typeTransServices.selectedTypeTrans = typeTrans;
  }

  getTypeTrans(){
    this.typeTransServices.getTypeTran()
    .subscribe(res => {
      this.typeTransServices.typeTrans = res as TypeTrans[];
    })
  }


  resetForm(form: NgForm){
    if(form){
      form.reset();
      this.typeTransServices.selectedTypeTrans = new TypeTrans();
    }
  }

}
