import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PracticeComponent } from './practice/practice.component';
import { LandingComponent } from './landing/landing.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { OrdersComponent } from './orders/orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
 

@NgModule({
  declarations: [
    AppComponent,
  
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    PracticeComponent,
    LandingComponent,
    AddPatientComponent,
    OrdersComponent,
    CheckoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
