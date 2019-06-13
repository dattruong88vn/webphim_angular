import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { ShareModule } from 'src/app/core/shared/share.module';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { ChiTietSinglePhimComponent } from './chi-tiet-single-phim/chi-tiet-single-phim.component';


@NgModule({
  declarations: [DanhSachPhimComponent, ItemPhimComponent,ChiTietSinglePhimComponent],
  exports: [DanhSachPhimComponent, ItemPhimComponent, ],
  imports: [
    CommonModule,
    ShareModule,
    DanhSachPhimRoutingModule,
  ]
})
export class DanhSachPhimModule { }
