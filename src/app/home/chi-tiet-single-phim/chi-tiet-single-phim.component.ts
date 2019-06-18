import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";    // Lấy data từ link
import { PhimService } from 'src/app/core/services/phim-service.service';  // Lấy data từ API
import { ShareStoreService } from 'src/app/core/shared/share-store.service';

@Component({
  selector: 'app-chi-tiet-single-phim',
  templateUrl: './chi-tiet-single-phim.component.html',
  styleUrls: ['./chi-tiet-single-phim.component.scss']
})

export class ChiTietSinglePhimComponent implements OnInit {
  
  maPhimFromLink: any;    // lấy từ link
  tenPhimFromLink: any;   // lấy từ link
  chiTietSinglePhim = {};  // lấy chi tiết lịch chiếu 1 phim từ API theo mã phim

  number: number; //in ra percent trong circle percent
  danhGia: number; // in ra điểm đánh giá
  status = false;
  arrStar = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private phimService: PhimService,
    private shareStore: ShareStoreService,
  ) { }

  ngOnInit() {
    this.getParamsFromLink();
    this.getChiTietPhimAPI();
  }

  getParamsFromLink() {
    // lấy tham số chính
    this.maPhimFromLink = this.activatedRoute.snapshot.paramMap.get("id");

    // lấy tham số phụ trong queryParams
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.tenPhimFromLink = params.tenPhim;
    });

    console.log(this.maPhimFromLink);
    console.log(this.tenPhimFromLink);
  }

  getChiTietPhimAPI() {
    const url = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.maPhimFromLink}`;
    this.phimService.get(url).subscribe((data:any) => {
      this.chiTietSinglePhim = data;
      this.status = this.getPercent(data);
      console.log(this.chiTietSinglePhim);
    })
  }

  xemTrailer() {
    this.shareStore.sharingChiTietPhim(this.chiTietSinglePhim);
  }

  getPercent(data): boolean {
    if (data === undefined) {
      return false;
    }
    else {
      this.danhGia = data.DanhGia;
      this.number = data.DanhGia/5*100;
      this.arrStar.length = this.danhGia;
      return true;
    }
  }

}
