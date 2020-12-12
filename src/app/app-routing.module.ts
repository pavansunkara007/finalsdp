import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {WelcomeComponent}from './welcome/welcome.component';
import {DoctorComponent}from './doctor/doctor.component';
import {UserComponent}from './user/user.component';
import {BookingComponent } from './booking/booking.component';
import {SearchBloodComponent} from './search-blood/search-blood.component'
import {SearchOrgansComponent} from './search-organs/search-organs.component'
import {SearchAsstComponent} from './search-asst/search-asst.component'
import {DonorListComponent} from './donor-list/donor-list.component'
import {ContactComponent} from './contact/contact.component'
import {BloodComponent} from './blood/blood.component'
import {AsstComponent } from './asst/asst.component';
import {RegisterComponent} from './register/register.component';
import {UserProfileComponent } from './user-profile/user-profile.component';
import {UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import {BillingComponent} from './billing/billing.component';

const routes: Routes = [ 
{path:'login', component:LoginComponent},
{path:'', component:WelcomeComponent},
{path:'doctor', component:DoctorComponent},
{path:'user', component:UserComponent},
{path:'booking', component:BookingComponent},
{path:'searchBlood', component:SearchBloodComponent},
{path:'searchOrgans', component:SearchOrgansComponent},
{path:'searchAsst', component:SearchAsstComponent},
{path:'donorList', component:DonorListComponent},
{path:'contact', component:ContactComponent},
{path:'blood',component:BloodComponent},
{path:'asst',component:AsstComponent},
{path:'register',component:RegisterComponent},
{path:'user-profile', component:UserProfileComponent},
{path:'user-profile-edit', component:UserProfileEditComponent},
{path:'billing', component:BillingComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
