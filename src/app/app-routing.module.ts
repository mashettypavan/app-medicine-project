import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { OrdersComponent } from './orders/orders.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patient', component: AddPatientComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'check', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
