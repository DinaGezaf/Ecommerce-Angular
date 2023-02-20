import { Component, OnInit } from '@angular/core';
import { Cart } from './../Model/ICart';
import { CartService } from './../Services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];
  product_id: number = 0;
  constructor(public active: ActivatedRoute, public cartser: CartService) {
    this.product_id = this.active.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.cartser.getCartDetails(this.product_id).subscribe((response) => {
      this.cart = response;
    });
  }
}
