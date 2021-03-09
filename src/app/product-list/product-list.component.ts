import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = products;

  share() {
    window.alert('O produto foi compartilhado!');
  }

  onNotify(){
    window.alert('Você será notificado quando o produto entrar em promoção!')
  }
}