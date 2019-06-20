import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhongDatVeComponent } from './phong-dat-ve.component';
import { PhongDatVeRoutingModule } from './phong-dat-ve-routing.module';
import { GheComponent } from 'src/app/components/ghe/ghe.component';

@NgModule({
  declarations: [
    PhongDatVeComponent,
    GheComponent
  ],
  imports: [
    CommonModule,
    PhongDatVeRoutingModule
  ]
})
export class PhongDatVeModule { }
