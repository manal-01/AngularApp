import { Component, OnInit } from '@angular/core';
import ordersdata from '../../assets/orders.json';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   

  }
  orderslist:any[]=ordersdata;
}
