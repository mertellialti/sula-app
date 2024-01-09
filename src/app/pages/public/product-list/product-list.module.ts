import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { MobileHeaderComponent } from 'src/app/components/mobile-header/mobile-header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListPageRoutingModule,
    MenuComponent,
    ProductComponent,
    MobileHeaderComponent,
    FooterComponent
  ],
  declarations: [ProductListPage]
})
export class ProductListPageModule {}
