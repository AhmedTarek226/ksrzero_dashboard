import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { BuyingOrdersResponse } from 'src/app/model/buyingOrdersResponse';

@Component({
  selector: 'app-view-buying-order',
  templateUrl: './view-buying-order.component.html',
  styleUrls: ['./view-buying-order.component.css']
})
export class ViewBuyingOrderComponent implements OnInit,OnDestroy {

  constructor(@Inject(MAT_DIALOG_DATA) public data:BuyingOrdersResponse,
    public matDialogRef:MatDialogRef<ViewBuyingOrderComponent>
  ) { }

  ngOnInit(): void {
    // alert(this.data)
  }

  ngOnDestroy(): void {
    this.matDialogRef.close(this.data);
  }

  onCloseClick(){
    this.ngOnDestroy();
  }
}
