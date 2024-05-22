import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CartService } from './services/cart/cart.service';
import { Preferences } from '@capacitor/preferences';
import { ProductService } from './services/product/product.service';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { MenuService } from './services/menu/menu.service';
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
    protected readonly menuSrv: MenuService,
    private readonly toastCtrl: ToastController
  ) {
  }
  async ngOnInit() {
   this.productSrv.createSampleProducts();
   const toast = await this.toastCtrl.create({
      header: 'SULA' ,message: 'Only Have Men T-Shirts', position: 'top', duration: 2000
    });
    await toast.present();
  }

  navigateHome() {
    console.log('navigate home');
    this.router.navigate([''])
  }

  async navigate(gender: string, category: string) {
    //   await this.menuCtrl.close();
    //   await setTimeout(() => {
    //     console.log("Delayed for 1 second.");
    //   }, 1000);
    //   this.router.navigate(['collection', gender, category]);
  }
}
