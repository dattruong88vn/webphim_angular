import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

const routes: Routes = [

  { path: "home", component: HomeComponent, children: [
      { path: "", component: TrangChuComponent},
      { path: "danh-sach-phim", loadChildren: "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule" },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
