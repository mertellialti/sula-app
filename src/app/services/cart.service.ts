import { Injectable, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  

  constructor() {

  }
  async ngOnInit() {
    const cartList = await Preferences.get({ key: 'cart' });
    if (!cartList) await Preferences.set({ key: 'cart', value: '' });    
  }
}
