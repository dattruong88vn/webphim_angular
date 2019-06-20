import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhongDatVeComponent } from './phong-dat-ve.component';

const routes: Routes = [
    {path: "", component: PhongDatVeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhongDatVeRoutingModule { }
