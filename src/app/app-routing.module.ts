import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'products/:gender/:type', component: ProductListComponent },
  { path: 'products/:gender/:type/:productId', component: ProductDetailsComponent },  
  {
    path: 'cart',
    loadChildren: () => import('./pages/public/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
