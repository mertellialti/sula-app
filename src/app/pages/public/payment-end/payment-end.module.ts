import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentEndPageRoutingModule } from './payment-end-routing.module';

import { PaymentEndPage } from './payment-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentEndPageRoutingModule
  ],
  declarations: [PaymentEndPage]
})
export class PaymentEndPageModule {}
