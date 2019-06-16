import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShareStoreService } from 'src/app/core/shared/share-store.service';
import { ItemPhimComponent } from 'src/app/home/danh-sach-phim/item-phim/item-phim.component';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  @ViewChild("iframe") iframe: ElementRef;

  singlePhimFromShareStore = {};
  originalLink = '';
  embedLink = 'https://www.youtube.com/embed/e4op_yl_JXY';

  constructor(
    private shareStroreService: ShareStoreService,
  ){ }

  ngOnInit() {
    this.shareStroreService.shareChiTietPhim.subscribe((data: any) => {
      this.singlePhimFromShareStore = data;
      this.originalLink = data.Trailer;
    })
  }

  stopTrailer() {
    this.iframe.nativeElement.src = '';
    this.iframe.nativeElement.src = this.embedLink;
  }

}
