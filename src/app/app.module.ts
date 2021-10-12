import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CdkTableModule} from '@angular/cdk/table';
import {MaterialModule} from './material.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SecureComponent } from './secure/secure.component';
import { HttpClientModule} from '@angular/common/http';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { ProductComponent } from './product/product.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { navService } from './nav/nav.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureComponent,
    LoggedoutComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AsideComponent,
    ProductComponent,
    CreateproductComponent,
    EditproductComponent,
    RightSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MaterialModule
  ],
  providers: [navService],
  bootstrap: [AppComponent]
})
export class AppModule { }
