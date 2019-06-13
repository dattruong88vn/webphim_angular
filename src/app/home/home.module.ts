import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { CarouselComponent } from './trang-chu/carousel/carousel.component';
import { DanhSachPhimModule } from './danh-sach-phim/danh-sach-phim.module';

@NgModule({
  declarations: [HomeComponent, HomeMenuComponent, TrangChuComponent, CarouselComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DanhSachPhimModule
  ]
})
export class HomeModule { }
