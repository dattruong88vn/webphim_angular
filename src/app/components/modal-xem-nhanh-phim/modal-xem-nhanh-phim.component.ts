import { Component, OnInit } from '@angular/core';
import { ShareStoreService } from 'src/app/core/shared/share-store.service';

@Component({
  selector: 'app-modal-xem-nhanh-phim',
  templateUrl: './modal-xem-nhanh-phim.component.html',
  styleUrls: ['./modal-xem-nhanh-phim.component.scss']
})
export class ModalXemNhanhPhimComponent implements OnInit {

  chiTietPhimFromShareStoreService = {};

  constructor(
    private shareStore: ShareStoreService
  ) { }

  ngOnInit() {
    this.shareStore.shareChiTietPhim.subscribe((data: any) => {
      this.chiTietPhimFromShareStoreService = data;
    })
  }

}
