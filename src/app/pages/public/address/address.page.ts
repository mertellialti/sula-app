import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

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
