import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorlistComponent } from './components/doctorlist/doctorlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ChoosedateComponent } from './components/choosedate/choosedate.component';
import { from } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Choosedate2Component } from './components/choosedate2/choosedate2.component';
import { Choosedate3Component } from './components/choosedate3/choosedate3.component';
import { ChooseslotComponent } from './components/chooseslot/chooseslot.component';
import { Chooseslot2Component } from './components/chooseslot2/chooseslot2.component';
import { Chooseslot3Component } from './components/chooseslot3/chooseslot3.component';
import { AppointmentformComponent } from './components/appointmentform/appointmentform.component';


// Route List
const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'choose-dates/Dr-John', component: ChoosedateComponent },
  {path: 'choose-dates/Dr-Smith', component:Choosedate2Component},
  { path: 'choose-dates/Dr-Mary', component: Choosedate3Component },
  { path: 'choose-slot/Dr-John', component: ChooseslotComponent },
  { path: 'choose-slot/Dr-Smith', component: Chooseslot2Component },
  { path: 'choose-slot/Dr-Mary', component: Chooseslot3Component },
  { path: 'appointment-form', component: AppointmentformComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorlistComponent,
    ChoosedateComponent,
    HeaderComponent,
    FooterComponent,
    Choosedate2Component,
    Choosedate3Component,
    ChooseslotComponent,
    Chooseslot2Component,
    Chooseslot3Component,
    AppointmentformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
