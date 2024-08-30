import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsModule } from './items/items.module';
import { HomePageModule } from './home-page/home-page.module';
import { ContactUsModule } from './contact-us/contact-us.module';

const routes: Routes = [
  {path:'',loadChildren:()=> import('./home-page/home-page.module').then(m=>HomePageModule)},
  {path:'products',loadChildren:()=> import('./items/items.module').then(m=>ItemsModule)},
  {path:'contact',loadChildren:()=> import('./contact-us/contact-us.module').then(m=>ContactUsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
