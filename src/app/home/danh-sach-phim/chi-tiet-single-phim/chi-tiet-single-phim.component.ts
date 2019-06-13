import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-chi-tiet-single-phim',
  templateUrl: './chi-tiet-single-phim.component.html',
  styleUrls: ['./chi-tiet-single-phim.component.scss']
})
export class ChiTietSinglePhimComponent implements OnInit {
  maPhimFromLink: any;    // lấy từ link
  tenPhimFromLink: any;   // lấy từ link

  chiTietLichChieuPhim: any;  // lấy chi tiết lịch chiếu 1 phim từ API
 
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getParamsFromLink();
  }

  getParamsFromLink() {
    // lấy tham số chính
    this.maPhimFromLink = this.activatedRoute.snapshot.paramMap.get("id");

    // lấy tham số trong queryParams
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.tenPhimFromLink = params.tenPhim;
    });

    console.log(this.maPhimFromLink);
    console.log(this.tenPhimFromLink);
  }

}
