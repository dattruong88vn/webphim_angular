import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PhimService } from 'src/app/core/services/phim-service.service';

@Component({
  selector: 'app-phong-dat-ve',
  templateUrl: './phong-dat-ve.component.html',
  styleUrls: ['./phong-dat-ve.component.scss']
})
export class PhongDatVeComponent implements OnInit {

  maLichChieuFromLink : any;
  tenPhimFromLink: '';
  danhSachGhe = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private phimService: PhimService
  ) { }

  ngOnInit() {
    this.getParamsFromLink();
    this.getLichChieuAPI();
  }

  getParamsFromLink = () => {
    this.maLichChieuFromLink = this.activatedRoute.snapshot.paramMap.get("ma-lich-chieu");
    this.activatedRoute.queryParams.subscribe((data) => {
      this.tenPhimFromLink = data.suatChieu;
    })

    console.log(this.maLichChieuFromLink);
    console.log(this.tenPhimFromLink);
  }

  getLichChieuAPI = () => {
    const url = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieuFromLink}`;
    this.phimService.get(url).subscribe((data: any) => {
      this.danhSachGhe = data.DanhSachGhe;
      console.log(this.danhSachGhe);
    })
  }


}
