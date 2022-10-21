import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICategory } from '../model/category';
import { IDashInfo } from '../model/dashInfo';
import { UserRegister } from '../model/userRegister';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http:HttpClient) {
   }

   getAll(){
    return this.http.get<IDashInfo>(environment.APIURl + "/admin/dashboard");
   }

   getUser(id:number){
    return this.http.get<any>(environment.APIURl + `/user/${id}`);
   }

   addUser(user:UserRegister){
    return this.http.post(environment.APIURl +'/admin/addUser',user);
   }

   addCategory(category:ICategory){
    return this.http.post(environment.APIURl +'/admin/addCategory',category);
   }

  //  getProduct(){
  //   return this.http.get<IDashInfo>(environment.APIURl + "/product/:id");
  //  }
}
