import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ItemsModule { }
