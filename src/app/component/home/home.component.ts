import { Component, OnInit } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // modalRef: MdbModalRef<AddUserComponent> | null = null;
  constructor() { }

  ngOnInit(): void {
  }
  openModal(){
    
  }

}
