import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ModalXemNhanhPhimComponent } from 'src/app/components/modal-xem-nhanh-phim/modal-xem-nhanh-phim.component';
import { ModalTrailerComponent } from 'src/app/components/modal-trailer/modal-trailer.component';
import { YoutubePipe } from 'src/app/pipe/youtube.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ModalXemNhanhPhimComponent, 
    ModalTrailerComponent,
    YoutubePipe
  ],
  exports: [
    ModalXemNhanhPhimComponent, 
    ModalTrailerComponent],
  imports: [ 
    CommonModule,
    NgxSpinnerModule
  ]
})
export class ShareModule { }
