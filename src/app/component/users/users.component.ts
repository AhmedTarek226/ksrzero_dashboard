import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/modules/users';
import { GetusersService } from 'src/app/service/getusers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:users[]=[]
  pageSize:number=10;
  pageIndex:number=1;
  totalItems:number=this.users.length ;
  constructor(private userserve :GetusersService) { }

  ngOnInit(): void {
    this.getallusers()
  }

getallusers(){
  this.userserve.getusers().subscribe((data)=>{
    console.log()
    this.users = data;
  })
}
deleteuser(id:string){
  this.userserve.deleteuser(id).subscribe((data)=>{
    console.log(data)
    this.getallusers()
  })
}
pageChanged(val:any)
{
  this.pageIndex=val
  this.getallusers()
}
}
