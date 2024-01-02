import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { IonicModule } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';

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
    private readonly productSrv: ProductService
  ) { }

  async ngOnInit() {
    this.cartVal = await this.checkInChart(this.product.id);
  }

  protected async checkInChart(id: string) {
    const x = (await Preferences.get({ key: id })).value;    
    return (x) ? parseInt(x) : 0;
    // return this.cartSrv.isInCart(id);
  }

  protected async updateItem(id: string, amount: number) {
    const x = (await Preferences.get({ key: id })).value;
    console.log('x: ', x);
    if (x) {
      const newValue = parseInt(x) + amount;      
      if (newValue <= 0) { await Preferences.remove({ key: id }); this.cartVal = 0 }
      else { await Preferences.set({ key: id, value: newValue.toString() }); this.cartVal = newValue }
    } else {
      await Preferences.set({ key: id, value: amount.toString() });
      this.cartVal = amount;
    }
    // this.cartSrv.updateItem(id,amount);
  }
}
