import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormComponent } from './Components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/Admin/home/home.component';
import { NavbarComponent as AdminNav } from './Components/Admin/navbar/navbar.component';
import { NavbarComponent as ManagerNav } from './Components/Manager/navbar/navbar.component';
import { RegisterListComponent } from './Components/Admin/register-list/register-list.component';
import { ManagerListComponent } from './Components/Admin/manager-list/manager-list.component';
import { ProfileComponent } from './Components/Admin/profile/profile.component';
import { RequestListComponent } from './Components/Staff/request-list/request-list.component';
import { StaffListComponent } from './Components/Manager/staff-list/staff-list.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { NavbarComponent } from './Components/Staff/navbar/navbar.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent,
    RegisterListComponent,
    ManagerListComponent,
    ProfileComponent,
    RequestListComponent,
    StaffListComponent,
    LoginComponent,
    RegistrationComponent,
    AdminNav,
    ManagerNav
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // RouterModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
