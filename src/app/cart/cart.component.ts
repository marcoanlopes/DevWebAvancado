import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

onSubmit(): void {
  //Processamento dos dados de saida
  this.items = this.cartService.clearCart();
  console.warn('Seu pedido foi enviado', this.checkoutForm.value);
  this.checkoutForm.reset();
}

}
