import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: any;

  constructor(
    readonly cartSrv: CartService
  ) { }

  async ngOnInit() {
    this.cart = await this.getCart();
    console.log(this.cart)
  }

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
      if (newItemAmount <= 0) {
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].amount = newItemAmount;
      }
    } else if (amount > 0) {
      cart.push({ id, amount, name: cart[itemIndex].name });
      cart[itemIndex].amount = 1;
    }

    await this.saveCart(cart);
  }
}
