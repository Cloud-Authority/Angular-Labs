import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatUsComponent } from './contat-us/contat-us.component';
import { ServicesComponent } from './services/services.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'contactus', component: ContatUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: '', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
