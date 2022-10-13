import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/account/login/login.component';
import { BuyingOrdersComponent } from './component/buying-orders/buying-orders.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { DeliveredOrdersComponent } from './component/delivered-orders/delivered-orders.component';
import { ExchangingOrdersComponent } from './component/exchanging-orders/exchanging-orders.component';
import { HomeComponent } from './component/home/home.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PendingAdsComponent } from './component/pending-ads/pending-ads.component';
import { UsersComponent } from './component/users/users.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:"login",pathMatch:"full"},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'users',component:UsersComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'categories/:category',component:HomeComponent},
    {path:'pendingAds',component:PendingAdsComponent},
    {path:'deliveredOrders',component:DeliveredOrdersComponent},
    {path:'buyingOrders',component:BuyingOrdersComponent},
    {path:'exchangingOrders',component:ExchangingOrdersComponent},
  ]},

  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }