import { Injectable, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  cart: any[] = [];
  cartTotal: number = 0;

  constructor(
    private readonly productSrv: ProductService
  ) {

  }

  ngOnInit() {

  }

  async getCart() {
    const cartData = (await Preferences.get({ key: 'cart' })).value;
    cartData ? this.cart = JSON.parse(cartData) : this.cart = [];
    console.log(this.cart, cartData);
  }

  async saveCart() {
    const cacheList = this.cart.map((element: any) => {
      return element = { id: element.id, amount: element.amount, price: element.price }
    })
    await Preferences.set({ key: 'cart', value: JSON.stringify(cacheList) });
  }

  async checkInCart(id: string) {
    if (!this.cart) await this.getCart();
    const item = this.cart.find((item: any) => { return (item.id === id) });
    return item ? item.amount : 0;
  }

  async updateItem(id: string, amount: number, size?: string) {
    let itemIndex;
    let cartAmount;

    if (size) {
      itemIndex = this.cart.findIndex((item: any) => (item.id === id && item.size === size));
    }
    else {
      itemIndex = this.cart.findIndex((item: any) => (item.id === id));
    }
    // const product = this.productSrv.getById(id);
    // TODO 
    const product = this.productSrv.getByIdAndVariantId(id, id);
    console.log('product: ', product);

    if (itemIndex !== -1) {
      const newItemAmount = this.cart[itemIndex].amount + amount;
      cartAmount = newItemAmount;
      if (newItemAmount <= 0) {
        this.cart.splice(itemIndex, 1);
        this.cartTotal -= product?.price!;
      } else {
        this.cart[itemIndex].amount = newItemAmount;
        (amount < 0) ? (this.cartTotal -= product?.price!) : (this.cartTotal += product?.price!);
      }
    } else if (amount > 0) {
      cartAmount = 1;
      // TODO 
      this.cart.push({ id, amount });
      this.cartTotal += product?.price!;
    }

    console.log('CART: ', this.cart);
    await this.saveCart();
    return cartAmount;
  }

  async getProductAmountInCart(id: string, size: string) {
    const product = this.cart.find((item: any) => (item.id === id && item.size == size));
    return product ? product.amount : 0;
  }

  async getCartTotal() {
    if (!this.cart) await this.getCart();
    else {
      this.cart.forEach((element: any) => {
        this.cartTotal += (element.amount * element.price);
      });
    }
  }

}
