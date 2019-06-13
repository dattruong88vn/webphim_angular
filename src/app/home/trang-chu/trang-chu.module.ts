import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ShareModule } from 'src/app/core/shared/share.module';

@NgModule({
  declarations: [TrangChuComponent, CarouselComponent],
  imports: [
    CommonModule,
    TrangChuRoutingModule,
    ShareModule,
  ]
})
export class TrangChuModule { }
