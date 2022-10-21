import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {Mat} from '@angular/material/paginator'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import{MatDialogModule} from '@angular/material/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LoginComponent } from './component/account/login/login.component';
import { LogoutComponent } from './component/account/logout/logout.component';
import { AddAdminComponent } from './component/account/add-admin/add-admin.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ProductsComponent } from './component/categories/products/products.component';
import { PendingAdsComponent } from './component/pending-ads/pending-ads.component';
import { DeliveredOrdersComponent } from './component/delivered-orders/delivered-orders.component';
import { BuyingOrdersComponent } from './component/buying-orders/buying-orders.component';
import { ExchangingOrdersComponent } from './component/exchanging-orders/exchanging-orders.component';
import { LoaderComponent } from './component/loader/loader.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptors } from 'src/app/service/httpinterceptor';
import { AddUserComponent } from './component/home/add-user/add-user.component';
import { AddCategoryComponent } from './component/home/add-category/add-category.component';
import { ViewPendingAdComponent } from './component/shared/view-pending-ad/view-pending-ad.component';
import { ViewProductComponent } from './component/categories/view-product/view-product.component';
import { ViewBuyingOrderComponent } from './component/shared/view-buying-order/view-buying-order.component';
import { ViewExchangingOrderComponent } from './component/shared/view-exchanging-order/view-exchanging-order.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    LogoutComponent,
    AddAdminComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    ProductsComponent,
    PendingAdsComponent,
    DeliveredOrdersComponent,
    BuyingOrdersComponent,
    ExchangingOrdersComponent,
    LoaderComponent,
    MainLayoutComponent,
    NotfoundComponent,
    AddUserComponent,
    AddCategoryComponent,
    ViewPendingAdComponent,
    ViewProductComponent,
    ViewExchangingOrderComponent
  ],
  entryComponents:[
    ViewBuyingOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
   MatPaginatorModule,
   NgxPaginationModule,
   BrowserAnimationsModule,
   MatDialogModule
  ],
  providers: [HttpInterceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
