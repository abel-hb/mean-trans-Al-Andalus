import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

addUser(form: NgForm){
  console.log(form.value);
}

  resetForm(form: NgForm){
    if(form){
      form.reset();
      this.userService.selectedUser = new Users();
    }
  }
}
