import { Injectable, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  cart: any[] = [];
  cartTotal: number = 0;

  constructor(
    private readonly productSrv: ProductService
  ) {
    this.cart.push(this.productSrv.sampleProducts[0].variants[0],this.productSrv.sampleProducts[2].variants[0]);
    console.log('cart :',this.cart);
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
      return element = { id: element.id, name: element.name, amount: element.amount, price: element.price }
    })
    await Preferences.set({ key: 'cart', value: JSON.stringify(cacheList) });
  }

  async checkInCart(id: string) {
    if (!this.cart) await this.getCart();
    const item = this.cart.find((item: any) => { return item.id === id });
    return item ? item.amount : 0;
  }
  
  async updateItem(id: string, amount: number) {
    const itemIndex = this.cart.findIndex((item: any) => item.id === id);
    const product = this.productSrv.getById(id);

    if (itemIndex !== -1) {
      const newItemAmount = this.cart[itemIndex].amount + amount;
      if (newItemAmount <= 0) {
        this.cart.splice(itemIndex, 1);
        this.cartTotal -= product?.price!;
      } else {
        this.cart[itemIndex].amount = newItemAmount;
        (amount < 0) ? (this.cartTotal -= product?.price!) : (this.cartTotal += product?.price!);
      }
    } else if (amount > 0) {

      this.cart.push({ id, amount, name: product?.name, price: product?.price, discount: product?.discount });
      this.cartTotal += product?.price!;
    }

    console.log('CART: ', this.cart);
    await this.saveCart();
  }

  async getCartTotal() {
    if (!this.cart) await this.getCart();
    else {
      this.cart.forEach((element: any) => {
        this.cartTotal += (element.amount * element.price);
      });
    }
  }

  discardCartByProductId(id: string) {
    const cart = this.cart.filter((p: any) => { return p.id !== id });
    this.cart = cart;
  }
  updateCartByProductIdAndAmount(id: string, amount: number) {

  }
}
