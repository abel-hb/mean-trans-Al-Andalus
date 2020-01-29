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

   getUsers(){
     return this.http.get(this.URL_API);
   }

   createrUsers(user: Users){
     return this.http.post(this.URL_API, user);
   }

   editUsers(user: Users){
     return this.http.put(this.URL_API+`/${users._id}`,user);
   }

   deletedUsers(user: Users){
     return this.http.delete(this.URL_API+`/${_id}`);
   }
}
