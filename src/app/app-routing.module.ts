import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { LoginComponent } from './login/login.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SecureComponent } from './secure/secure.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'loggedout', component: LoggedoutComponent, canActivate: [AuthGuard]},
  {path: 'secure', component: SecureComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/create', component: CreateproductComponent},
  {path: 'products/edit', component: EditproductComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
