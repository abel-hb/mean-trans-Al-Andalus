import { Component } from '@angular/core';
import { Users } from './models/users';
import { UsersService } from './services/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
   public title = 'frontend';
   public user: Users;
   public user_register: Users;
   public identity = null;
   public token = null;

   constructor(private userService: UsersService, private router: Router){
     this.user = new Users('','','','','ROLER_USER','','',0,'','','');
     this.user_register = new Users('','','','','ROLER_USER','','',0,'','','');

   }

   ngOnInit(){
     this.identity = this.userService.getIdentity();
     this.token = this.userService.getToken();
   }

   
  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.router.navigate(['/']);
    M.toast({html: 'Logout succefully, thanks for you visited'});
  }

   public onSubmitLogin(form: NgForm) {
     // console.log(this.user);
     const params = {
       email: form.value.email,
       password: form.value.password,
       gethash: true
     }
     // Get datas user
     this.userService.signUp(form.value)
       .subscribe(
         response =>{
           const identity = response['user'];
           this.identity = identity;
           if(this.token != null){
             M.toast({html: 'Ok login'});
           } else {
             // Create element token
             localStorage.setItem('identity', JSON.stringify(identity));
             // Get token
             this.userService.signUp(params)
             .subscribe(
               res =>{
                  const token = res['token'];
                  this.token = token;
                  if(this.token.length <= 0){
                    M.toast({html: 'Error Login'});
                  }else{
                    localStorage.setItem('token', token);
                    this.user = new Users('','','','','ROLER_USER','','',0,'','','');
                  }
             },err => {
               M.toast({html: 'Not Login'});
             }
             );
           }
           M.toast({html: 'Login Successfully'});
         },error =>{
           M.toast({html: 'Not Login'});
         }
       );
  } 

  onSubmitRegister(form: NgForm){
    const params = {
      name: this.user_register.name,
      surname: this.user_register.surname,
      dni: this.user_register.dni,
      email: this.user_register.email,
      password: this.user_register.password,
      tlf: this.user_register.tlf,
      transport: this.user_register.transport,
      discharge_date: this.user_register.discharge_date,
      role:'ROLER_USER',
      image: ''
    }
    this.userService.register(params).subscribe(
      response => {
        const user = response['user'];
        this.user_register = user;
        if(!user._id){
          M.toast({html: 'Not register'});
        }else{
          M.toast({html: 'User register successfully. You can login using: '+ this.user_register.email});
          this.user_register = new Users('','','','','ROLER_USER','','',0,'','','');
        }
      },error => {
        M.toast({html: 'Not register'});
      }
    )
  }
}