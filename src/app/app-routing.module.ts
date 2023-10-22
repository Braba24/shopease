import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo :'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)},
  {path: 'products', loadChildren : () => import('./products-page/products-page.module').then(m=>m.ProductsPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }