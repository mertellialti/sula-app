import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/public/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'collection/:gender/:category',
    loadChildren: () => import('./pages/public/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'product/:productId',
    loadChildren: () => import('./pages/public/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/public/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'payment/address',
    loadChildren: () => import('./pages/public/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'payment/payment-option',
    loadChildren: () => import('./pages/public/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-end',
    loadChildren: () => import('./pages/public/payment-end/payment-end.module').then( m => m.PaymentEndPageModule)
  },
  { 
    path: '**',
    loadChildren: () => import('./pages/security/page-not-found/page-not-found.module').then(m => m.PageNotFoundPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
