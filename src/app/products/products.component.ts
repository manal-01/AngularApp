import { Component, OnInit } from '@angular/core';
import productsdata from '../../assets/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    


  }
  productslist:any[]=productsdata;
}
