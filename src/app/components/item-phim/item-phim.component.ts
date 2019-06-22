import { Component, OnInit, Input } from '@angular/core';
import { ShareStoreService } from 'src/app/core/shared/share-store.service';  // đẩy chi tiết phim vào Store --> click Modal
import { Router } from "@angular/router";  // đưa data qua link

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

  @Input() singlePhim;    // Input từ component DanhSachPhim

  statusButtonDatVe = true;

  constructor(
    private shareChiTietPhim: ShareStoreService,  // đẩy chi tiết phim vào Store --> click Modal
    private router: Router,       // đưa data qua link
  ) { }
 
  ngOnInit() {}

  xemTrailer() {
    this.shareChiTietPhim.sharingChiTietPhim(this.singlePhim);
  }

  /*
      - Function xem chi tiết phải link đến chi tiết 1 bộ phim phải truyền id của bộ phim vào link
  */
  xemChiTiet() {
    this.router.navigate(
      ['/home/danh-sach-phim/chi-tiet-phim/', this.singlePhim.MaPhim],
      {
        queryParams: {
          tenPhim: this.singlePhim.TenPhim,
        }
      }
    )
  }

  changeStatusBtn = (status) => {
    this.statusButtonDatVe = !status;
  }

}
