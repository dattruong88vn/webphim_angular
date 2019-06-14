import { Component, OnInit} from '@angular/core';
import { ShareStoreService } from 'src/app/core/shared/share-store.service';   // Nhận data từ store
import { DomSanitizer } from '@angular/platform-browser';   // Fix lỗi unsafe

@Component({
  selector: 'app-modal-xem-nhanh-phim',
  templateUrl: './modal-xem-nhanh-phim.component.html',
  styleUrls: ['./modal-xem-nhanh-phim.component.scss']
})
export class ModalXemNhanhPhimComponent implements OnInit {

  chiTietPhimFromShareStoreService = {};

  originalLink = 'https://www.youtube.com/embed/';
  embedLink = '';

  viTriCat = 32;

  constructor(
    private shareStore: ShareStoreService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.shareStore.shareChiTietPhim.subscribe((data: any) => {
      this.chiTietPhimFromShareStoreService = data; // lấy chi tiết phim
      this.originalLink = data.Trailer;  // lấy link trailer
    })
    this.embedLink = '';
  }

  xemTrailer() {
     this.embedLink = 'https://www.youtube.com/embed/';
     this.embedLink += this.originalLink.slice(32);
  }
}
