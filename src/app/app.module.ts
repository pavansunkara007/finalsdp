import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { SearchBloodComponent } from './search-blood/search-blood.component';
import { SearchOrgansComponent } from './search-organs/search-organs.component';
import { SearchAsstComponent } from './search-asst/search-asst.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { ContactComponent } from './contact/contact.component';
import { BloodComponent } from './blood/blood.component';
import { AsstComponent } from './asst/asst.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    DoctorComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    SearchBloodComponent,
    SearchOrgansComponent,
    SearchAsstComponent,
    DonorListComponent,
    ContactComponent,
    BloodComponent,
    AsstComponent,
    RegisterComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    BillingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
