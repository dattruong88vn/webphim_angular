import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/core/services/phim-service.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim = [];

  constructor(private phimService: PhimService) { }

  ngOnInit() {
    this.getDSPhimAPI();
  }

  getDSPhimAPI() {
    const url = 'QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    this.phimService.get(url).subscribe((data:any) => {
      this.danhSachPhim = data;
    })
  }
}
