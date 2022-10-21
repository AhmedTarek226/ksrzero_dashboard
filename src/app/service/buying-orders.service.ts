import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BuyingOrdersResponse } from '../model/buyingOrdersResponse';
import { IDashInfo } from '../model/dashInfo';

@Injectable({
  providedIn: 'root'
})
export class BuyingOrdersService {

  constructor(private http:HttpClient) {
  }

  getAll(){
   return this.http.get<BuyingOrdersResponse>(environment.APIURl + "/admin/dashboard/buyingOrders");
  }
  setNewStatus(id:string,newStatus:string){
    return this.http.post(environment.APIURl +'/admin/dashboard/buyingOrders/'+id+'/updatestatus/'+newStatus,{responseType: 'text'});
  }
}
