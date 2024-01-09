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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
