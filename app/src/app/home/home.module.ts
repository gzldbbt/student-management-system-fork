import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    HomeComponent,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
