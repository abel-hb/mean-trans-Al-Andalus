import { Component } from '@angular/core';
import { Users } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public title = 'frontend';
   public user: Users;
   public identity;
   public token;

   constructor(){
     this.user = new Users('','','','','ROLER_USER','','',0,'','','');
   }
}
