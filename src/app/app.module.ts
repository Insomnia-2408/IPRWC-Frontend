import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { HeaderComponent } from './header/header.component';
import { CarsGridComponent } from './cars-grid/cars-grid.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserdataComponent } from './userdata/userdata.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CarServicesComponent } from './car-services/car-services.component';
import { CarsItemComponent } from './cars-item/cars-item.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AlertPopupComponent} from './popup/alert-popup/alert-popup.component';
import {ConfirmPopupComponent} from './popup/confirm-popup/confirm-popup.component';
import { NamePipe } from './name.pipe';
import { AddressPipe } from './address.pipe';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cars', component: CarsGridComponent},
  {path: 'userdata', component: UserdataComponent},
  {path: 'orders', component: OrderListComponent},
  {path: 'car-services', component: CarServicesComponent},
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CarsGridComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserdataComponent,
    OrderListComponent,
    CarServicesComponent,
    CarsItemComponent,
    ShoppingcartComponent,
    AlertPopupComponent,
    ConfirmPopupComponent,
    NamePipe,
    AddressPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [CarsItemComponent, ConfirmPopupComponent, AlertPopupComponent]
})

export class AppModule { }
