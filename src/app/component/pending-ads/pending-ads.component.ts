import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PendingAddService } from 'src/app/service/pending-add.service';
import { pendingAdd,pro,user, userProduct} from '../../modules/pendingAdd';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pending-ads',
  templateUrl: './pending-ads.component.html',
  styleUrls: ['./pending-ads.component.css']
})
export class PendingAdsComponent implements OnInit , OnChanges{
  prolist:pro[]=[];
  userlist:user[]=[];
  userProd:userProduct[]=[];

  pageSize:number=2;
  pageIndex:number=1;
  totalItems:number=this.userProd.length ;

  constructor(private add : PendingAddService , private matdilog:MatDialog,private router:Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getpendingAdd()
  }
  ngOnInit(): void {
    this.getpendingAdd()
  }
getpendingAdd(){
    this.add.getpindingAdd().subscribe({
      next:(data)=>{
      for (let index = 0; index < data.pro.length; index++) {
      this.userProd[index]= {porduct:data.pro[index],user:data.us[index]};
      }},
      error:(err)=>{
        console.log(err);
      }
    })
  }
  deleteAdd(id:string){

    if(confirm("Are you sure ?")){

    this.add.deleteAdd(id).subscribe((data)=>{
      console.log(data)
      this.getpendingAdd()
      this.router.navigate(['/dashbord/pendingAds']);

    })}else{
      alert("Ad accepted !!")
    }

  }
  acceptAdd(id:string){
    if(confirm("Are you sure ?")){
      this.add.acceptAdd(id).subscribe((data)=>{
      console.log(data)
      this.getpendingAdd()
      this.router.navigate(['/dashbord/pendingAds']);

    })
    }else{
      alert("Ad accepted !!")
    }
  }
  pageChanged(val:any)
  {
    this.pageIndex=val
    this.getpendingAdd()
  }

  viewdetails(item:userProduct){
    this.matdilog.open(ViewdetailsComponent,{
      data:item
    })
  }
}


