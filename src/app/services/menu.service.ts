import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  manMenu = [
    { name: 'All Sale', route: 'man/all-sale' },
    { name: 'T-Shirts', route: 'man/t-shirt' },
    { name: 'Sweatshirts', route: 'man/sweatshirt' },
    { name: 'Jackets', route: 'man/jackets' },
    { name: 'Caps', route: 'man/caps' },
  ]

  womanMenu = [
    { name: 'All Sale', route: 'woman/all-sale' },
    { name: 'T-Shirts', route: 'woman/t-shirt' },
    { name: 'Sweatshirts', route: 'woman/sweatshirt' },
    { name: 'Jackets', route: 'woman/jackets' },
    { name: 'Caps', route: 'woman/caps' },
  ]

  footerColumn1 = [
    { name: 'Cookie Settings' },
    { name: 'Privacy & Cookies Policy' },
    { name: 'About SULA' },
    { name: 'Online Shopping Policy' },
    { name: 'Return & Change' },
    { name: 'Order & Delivery' },
    { name: 'Career' }
  ]

  footerColumn2 = [
    { name: 'Instagram', icon: 'logo-instagram' },
    { name: 'TikTok', icon: 'logo-tiktok' },
    { name: 'X', icon: 'logo-twitter' },
    { name: 'SoundCloud', icon: 'logo-soundcloud' },
  ]
  constructor() { }
}
