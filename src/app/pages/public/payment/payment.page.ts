import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(
    readonly cartSrv: CartService,
    private readonly location: Location,
    private readonly toastCtrl: ToastController,
    private readonly router: Router
  ) {
    console.log('cart currently: ', cartSrv.cart);
  }
  async ngOnInit() {

  }

  protected back() {
    this.location.back()
  }

  async pay() {
    const toast = await this.toastCtrl.create({ header: 'SULA', message: 'Payment is a success.', position: 'top', duration: 1500 });
    await toast.present();
    this.router.navigate(['payment-end']);
  }
}
