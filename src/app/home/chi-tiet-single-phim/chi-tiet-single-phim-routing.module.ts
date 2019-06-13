import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiTietSinglePhimComponent } from './chi-tiet-single-phim.component';

const routes: Routes = [
  {
    path: "chi-tiet-phim/:id", component: ChiTietSinglePhimComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChiTietSinglePhimRoutingModule { }
