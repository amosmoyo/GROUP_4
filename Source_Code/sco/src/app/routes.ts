import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AuthGurds } from './components/Guard';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { AboutComponent } from './components/about/about.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home/about', component: AboutComponent},
  {path: 'home/products', component: ProductListComponent},
  {path: 'home/cart', component: CartItemsComponent, canActivate: [AuthGurds]},
  {path: 'home/products/:id', component: ProductDetailComponent, canActivate: [AuthGurds]},
  { path: 'user', loadChildren: () => import('./components/users/user/user.module').then((m) => m.UserModule)}
];
