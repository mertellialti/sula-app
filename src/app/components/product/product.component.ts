import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';

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
export class ProductComponent  implements OnInit {

  @Input() product: any; // Input for product data
  swiperModules = [IonicSlides];
    
  constructor() { }

  ngOnInit() {}

}
