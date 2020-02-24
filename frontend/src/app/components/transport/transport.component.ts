import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { NgForm } from '@angular/forms';
import { Transport } from 'src/app/models/transport';


declare var M: any;

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.getTransports();
  }

  addTransport(form: NgForm){
    if (form.value._id){
      this.transportService.createrTransport(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Transport updated successfully.'});
        this.getTransports();
      });
    }else{
      this.transportService.createrTransport(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Transport saved successfully.'});
      });
    }
  }

  deleteTransports(_id: Transport){
    if(confirm('Are you sure want delele it')){
      this.transportService.deletedTransport(_id)
      .subscribe(res => {
        this.getTransports();
        M.toast({html: 'Transport deleted successfully.'});
      });
    }
  }

  editTransports(transport: Transport){
    this.transportService.selectedTransport = transport;
  }

  getTransports(){
    this.transportService.getTransport()
    .subscribe(res => {
      this.transportService.transport = res as Transport[];
    })
  }

  resetForm(form: NgForm){
    if(form){
      form.reset();
      this.transportService.selectedTransport = new Transport();
    }
  }

}
