import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ChiTietSinglePhimComponent } from './chi-tiet-single-phim/chi-tiet-single-phim.component';

const routes: Routes = [
  { path: "", component: DanhSachPhimComponent },
  { path: "chi-tiet-phim/:id", component: ChiTietSinglePhimComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachPhimRoutingModule { }
