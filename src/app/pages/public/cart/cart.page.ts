import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Preferences } from '@capacitor/preferences';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  totalPrice: number = 0;

  constructor(
    readonly cartSrv: CartService,
    private readonly location: Location,
  ) { 
    console.log('cart currently: ', cartSrv.cart);    
  }
  async ngOnInit() {
    
  }

  protected back() {
    this.location.back()
  }
}
