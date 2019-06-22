import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/core/services/phim-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  // listPhim = [];
  // listPhimOnSlide = [];

  constructor(private phimService: PhimService) { }

  ngOnInit() {
    // this.getDSPhimAPI();
  }

  getDSPhimAPI() {
    // const url = 'QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    // this.phimService.get(url).subscribe((data:any) => {
    //   this.listPhim = data;
    //   console.log(data);
    //   this.showPhimOnSlide(data);
    // })
  }

  // showPhimOnSlide = (data: []) => {
  //   if (data) {
  //     this.listPhim = data.filter((item, index) => index > data.length - 5);
  //     console.log(this.listPhim);
  //   }
  // }

}
