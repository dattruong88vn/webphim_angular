import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { ShareModule } from 'src/app/core/shared/share.module';

@NgModule({
  declarations: [DanhSachPhimComponent, ItemPhimComponent],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class DanhSachPhimModule { }
