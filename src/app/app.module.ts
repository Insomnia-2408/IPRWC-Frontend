import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { CarsGridComponent } from './cars-grid/cars-grid.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserdataComponent } from './userdata/userdata.component';
import { OrderListComponent } from './order-list/order-list.component';
import { TiresGridComponent } from './tires-grid/tires-grid.component';
import { CarServicesComponent } from './car-services/car-services.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cars', component: CarsGridComponent},
  {path: 'userdata', component: UserdataComponent},
  {path: 'orders', component: OrderListComponent},
  {path: 'tires', component: TiresGridComponent},
  {path: 'car-services', component: CarServicesComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DropdownDirective,
    CarsGridComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserdataComponent,
    OrderListComponent,
    TiresGridComponent,
    CarServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
