import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { users } from '../modules/users';

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private http :HttpClient) { }

  getusers(){
    return this.http.get<users[]>(environment.APIURl +'/dashboard/users')
  }
  deleteuser(id:string){
    return this.http.delete(environment.APIURl +'/dashboard/deleteuser/'+id)
  }
}
