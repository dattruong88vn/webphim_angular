import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietSinglePhimComponent } from './chi-tiet-single-phim.component';
import { ChiTietSinglePhimRoutingModule } from './chi-tiet-single-phim-routing.module';

@NgModule({
  declarations: [ChiTietSinglePhimComponent],
  imports: [
    CommonModule,
    ChiTietSinglePhimRoutingModule
  ]
})
export class ChiTietSinglePhimModule { }
