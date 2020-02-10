import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()

export class UsersService {

  readonly URL_API = 'http://localhost:3500/api/users';
  selectedUser: Users;
  users: Users[];

  constructor(private http: HttpClient) {
    this.selectedUser = new Users();
   }

   getUser(){
     return this.http.get(this.URL_API);
   }

   createrUser(user: Users){
     return this.http.post(this.URL_API, user);
   }

   editUser(user: Users){
     return this.http.put(this.URL_API+`/${user._id}`,user);
   }

   deletedUser(user: Users){
     return this.http.delete(this.URL_API+`/${user._id}`);
   }
}
