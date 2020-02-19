import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/users';

declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

addUser(form: NgForm){
  if (form.value._id){
    this.userService.editUser(form.value)
    .subscribe(res => {
      console.log(res);
      this.resetForm(form);
      M.toast({html: 'User updated successfully.'});
      this.getUsers();
    });
  }else{
    this.userService.createrUser(form.value)
    .subscribe(res => {
      console.log(res);
      this.resetForm(form);
      M.toast({html: 'User saved successfully.'});
      this.getUsers();
    });
  }
  // console.log(form.value);
}

deleteUsers(_id: Users){
  if(confirm('Are you sure want delete it?')){
    this.userService.deletedUser(_id)
    .subscribe(res => {
      this.getUsers();
      M.toast({html: 'User deleted successfully.'});
    });
  }
}

editUsers(user: Users){
  this.userService.selectedUser = user;
}

getUsers(){
  this.userService.getUser()
  .subscribe(res => {
    this.userService.users = res as Users[];
    console.log(res);
  })
}

  resetForm(form: NgForm){
    if(form){
      form.reset();
      this.userService.selectedUser = new Users('','','','','ROLER_USER','','',0,'','','');
    }
  }
}
