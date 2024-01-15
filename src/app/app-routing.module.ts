import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { PropertyDetailResolverService } from './Property/property-detail/property-detail-resolver.service';

const routes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent, resolve: {prp: PropertyDetailResolverService}}, //Adding resolve: {prp: PropertyDetailResolverService} for Routing if there is some error from server/API ends
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'user-login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
