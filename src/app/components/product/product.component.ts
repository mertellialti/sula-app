import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { IonicModule } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SwiperOptions } from 'swiper/types/swiper-options';

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

  @Input() product: any = null; // Input for product data
  swiperModules = [IonicSlides];
  protected cartVal: number;
  swiperOptions: SwiperOptions = {
    slidesPerView: 1, // Display 1.2 images per view
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false, // Enable autoplay even when the user interacts with the Swiper
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Allow pagination bullets to be clickable
    },
  };

  constructor(
    private readonly productSrv: ProductService,
    private readonly cartSrv: CartService,
    private readonly router: Router
  ) {
    this.cartVal = 0;
  }

  async ngOnInit() {
    console.log('Product is: ', this.product);
    // this.cartVal = await this.cartSrv.checkInCart(this.product.id);     
    // console.log('Value: ',  this.cartVal);
  }

  async IonViewDidEnter() {

  }

  protected async updateItem(id: string, amount: number) {
    await this.cartSrv.updateItem(id, amount);
    this.cartVal = await this.cartSrv.checkInCart(this.product.id);
  }

  navigateProductDetails() {
    console.log(`click => product/${this.product.id} `);
    this.router.navigate(['product', this.product.id]);
  }
}
