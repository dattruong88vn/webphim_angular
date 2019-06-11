import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMenuComponent } from './home-menu/home-menu.component';

@NgModule({
  declarations: [HomeComponent, HomeMenuComponent ],
  exports: [HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
