import { Component, OnInit, Input } from '@angular/core';
import { ShareStoreService } from 'src/app/core/shared/share-store.service';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  // Input từ component DanhSachPhim
  @Input() singlePhim;

  constructor(
    private shareChiTietPhim: ShareStoreService, // share chi tiet phim bằng store --> xem nhanh
  ) { }

  ngOnInit() {
  }

  xemNhanh() {
    this.shareChiTietPhim.sharingChiTietPhim(this.singlePhim);
  }

}
