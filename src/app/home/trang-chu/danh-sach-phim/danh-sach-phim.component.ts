import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/core/phim-service.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim = [];

  constructor(private phimSer: PhimService) { }

  ngOnInit() {
    this.getDSPhim();
  }

  getDSPhim() {
    const url = 'QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    this.phimSer.get(url).subscribe((data:any) => {
      this.danhSachPhim = data;
      console.log(data);
    })
  }
}
