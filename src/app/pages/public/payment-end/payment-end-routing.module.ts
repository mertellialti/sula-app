import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentEndPage } from './payment-end.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentEndPageRoutingModule {}
