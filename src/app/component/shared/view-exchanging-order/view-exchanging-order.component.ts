import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { ExchangingOrdersResponse } from 'src/app/model/exchangingOrdersResponse';

@Component({
  selector: 'app-view-exchanging-order',
  templateUrl: './view-exchanging-order.component.html',
  styleUrls: ['./view-exchanging-order.component.css']
})
export class ViewExchangingOrderComponent implements OnInit,OnDestroy {

  constructor(@Inject(MAT_DIALOG_DATA) public data:ExchangingOrdersResponse,
  public matDialogRef:MatDialogRef<ViewExchangingOrderComponent>) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.matDialogRef.close(this.data);
  }

  onCloseClick(){
    this.matDialogRef.close();
  }

}
