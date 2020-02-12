import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TypeTransComponent } from './components/type-trans/type-trans.component';
import { TransportComponent } from './components/transport/transport.component';
import { AplicationComponent } from './components/aplication/aplication.component';
import { PlacesComponent } from './components/places/places.component';
import { FormsModule } from '@angular/forms';
import { TypeTransService } from './services/type-trans.service';
import { TransportService } from './services/transport.service';
import { UsersService } from './services/users.service';
import { PlacesServices } from './services/places.service';
import { AplicationService } from './services/aplication.service';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TypeTransComponent,
    TransportComponent,
    AplicationComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TypeTransService, TransportService,UsersService,PlacesServices, AplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
