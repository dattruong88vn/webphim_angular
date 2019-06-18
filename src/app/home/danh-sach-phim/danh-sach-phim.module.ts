import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ItemPhimComponent } from '../../components/item-phim/item-phim.component';
import { ShareModule } from 'src/app/core/shared/share.module';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { ChiTietSinglePhimComponent } from '../chi-tiet-single-phim/chi-tiet-single-phim.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    DanhSachPhimComponent, 
    ItemPhimComponent,
    ChiTietSinglePhimComponent,
  ],
  exports: [
    DanhSachPhimComponent, 
    ItemPhimComponent, ],
  imports: [
    CommonModule,
    ShareModule,
    DanhSachPhimRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
  ]
})
export class DanhSachPhimModule { }
