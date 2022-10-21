import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDashInfo } from 'src/app/model/dashInfo';
import { DashService } from 'src/app/service/dash.service';
import { AddUserComponent } from './add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Subscription!:Subscription;
  dashInfo:IDashInfo;
 
  constructor(private dashService:DashService,private matDialog:MatDialog) {   
    this.dashInfo={
      numOfUsers:0,
      numOfCategories:0,
      numOfDeliveredOrders:0,
      numOfPendingAds:0,
      newOrders:[],
      newUsers:[],
      pendingAds:[],
      ordersDetails:[]
      // orderProductDetails:{},
      // orderBuyerDetails:{},
      // orderSellerDetails:{}
    };
  }

  ngOnInit(): void {
    this.FetchData();
  }
 
  FetchData(){
    this.Subscription = this.dashService.getAll().subscribe({
      next:(response)=>{
        console.log(response);
        this.dashInfo = response;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  openAddUserModal(){
    let dialogRef = this.matDialog.open(AddUserComponent,{
      width:"40%",
      height:"83%",
      position:{
        top:"70px"
      },
      // disableClose:true
    });

    dialogRef.afterClosed().subscribe(
      result=>{
        this.FetchData();
      }
    )
  }

  openAddCategoryModal(){
    let dialogRef = this.matDialog.open(AddCategoryComponent,{
      width:"80%",
      height:"85%",
      position:{
        top:"70px"
      },
      // disableClose:true
    });

    dialogRef.afterClosed().subscribe(
      result=>{
        this.FetchData();
      }
    )
  }

  
}
