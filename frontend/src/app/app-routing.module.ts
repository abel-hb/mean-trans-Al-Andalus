import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ContactComponent } from './view/contact/contact.component';
import { UsersComponent } from './components/users/users.component';
import { TypeTransComponent } from './components/type-trans/type-trans.component';
import { TransportComponent } from './components/transport/transport.component';
import { PlacesComponent } from './components/places/places.component';
import { AplicationComponent } from './components/aplication/aplication.component';

// Class and methods
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'type-trans', component: TypeTransComponent},
  {path: 'transport', component: TransportComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'aplication', component: AplicationComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
