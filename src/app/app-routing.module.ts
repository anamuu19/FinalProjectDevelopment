import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { NavbarComponent } from './Components/Staff/navbar/navbar.component';
import { HomeComponent } from './Components/Admin/home/home.component';
import { RequestListComponent } from './Components/Staff/request-list/request-list.component';
import { ProfileComponent } from './Components/Admin/profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'staff',
    component: NavbarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'request', component: RequestListComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
