import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CartService } from './services/cart.service';
import { Preferences } from '@capacitor/preferences';
import { ProductService } from './services/product.service';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './components/menu/menu.component';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    readonly cartSrv: CartService,
    readonly productSrv: ProductService,
    private router: Router,
    private menuCtrl: MenuController,
    protected readonly menuSrv: MenuService
  ) {
  }
  async ngOnInit() {
    this.productSrv.createDummyProducts();
  }

  navigateHome(){
    console.log('navigate home');
    this.router.navigate([''])
  }

  async navigate(gender: string, category: string) {
    await this.menuCtrl.close();
    // Close the menu
    await setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, 1000);
    this.router.navigate(['collection', gender, category]);
  }
}
