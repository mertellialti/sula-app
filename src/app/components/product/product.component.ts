import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { IonicModule } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [
    CommonModule,
    IonicModule
  ],
  standalone: true
})
export class ProductComponent implements OnInit {

  @Input() product: any; // Input for product data
  swiperModules = [IonicSlides];
  protected cartVal: number = 0

  constructor(
    private readonly cartSrv: CartService
  ) { }

  async ngOnInit() {
    this.cartVal = await this.checkInCart(this.product.id);
    // this.cartSrv.inCartProducts.set(this.product.id,this.cartVal);
    // console.log(this.cartSrv.inCartProducts);
  }

  // protected async getCart() {
  //   const cartData = (await Preferences.get({ key: 'cart' })).value;
  //   return cartData ? JSON.parse(cartData) : {};
  // }

  // protected async saveCart(cart: any) {
  //   await Preferences.set({ key: 'cart', value: JSON.stringify(cart) });
  // }

  // protected async checkInCart(id: string) {
  //   const cart = await this.getCart();
  //   return cart[id] ? parseInt(cart[id]) : 0;
  // }

  // protected async updateItem(id: string, amount: number) {
  //   const cart = await this.getCart();

  //   if (cart[id]) {
  //     const newValue = parseInt(cart[id]) + amount;
  //     if (newValue <= 0) {
  //       delete cart[id];
  //       this.cartVal = 0;
  //     } else {
  //       cart[id] = newValue.toString();
  //       this.cartVal = newValue;
  //     }
  //   } else if (amount > 0) {
  //     cart[id] = amount.toString();
  //     this.cartVal = amount;
  //   }

  //   await this.saveCart(cart);
  // }
  protected async getCart() {
    const cartData = (await Preferences.get({ key: 'cart' })).value;
    return cartData ? JSON.parse(cartData) : [];
  }

  protected async saveCart(cart: any) {
    await Preferences.set({ key: 'cart', value: JSON.stringify(cart) });
  }

  protected async checkInCart(id: string) {
    const cart = await this.getCart();
    const item = cart.find((item: any) => item.id === id);
    return item ? item.amount : 0;
  }

  protected async updateItem(id: string, amount: number) {
    const cart = await this.getCart();
    const itemIndex = cart.findIndex((item: any) => item.id === id);

    if (itemIndex !== -1) {
      const newItemAmount = cart[itemIndex].amount + amount;
      this.cartVal = newItemAmount;
      if (newItemAmount <= 0) {
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].amount = newItemAmount;
      }
    } else if (amount > 0) {
      cart.push({ id, amount, name: this.product.name });
      this.cartVal = 1;
    }

    await this.saveCart(cart);
  }


}
