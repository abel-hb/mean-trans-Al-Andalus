import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable()

export class UsersService {

  readonly URL_API = 'http://localhost:3500/api/users';
  selectedUser: Users;
  users: Users[];
  public url: string;
  public identity = null;
  public token = null;

  constructor(private http: HttpClient) {
    //this.selectedUser = new Users('','','','','ROLER_USER','','',0,'','','');
    this.url = GLOBAL.url;
  }
  
  signUp(params){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.url + 'users/login', params, httpOptions);
  }

  register(params){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.url + 'users/register', params, httpOptions);
  }

  getIdentity(){
    const identity = JSON.parse(localStorage.getItem('identity'));
    if(identity != null){
      this.identity = identity;
    }
    return this.identity;
  }

  getToken(){
    const token = localStorage.getItem('token');
    if(token != null){
      this.token = token;
    }
    return this.token;
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
