import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

  ngOnInit() {
    // Pega o id do produto
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // encontre o produto proveniente do id da rota
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
