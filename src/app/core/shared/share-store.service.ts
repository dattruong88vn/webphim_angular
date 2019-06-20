import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareStoreService {

  // chi tiet phim
  chiTietPhim = new BehaviorSubject({} as any);          // khai báo đối tượng Behavior
  shareChiTietPhim = this.chiTietPhim.asObservable();    // chuyển đối tượng Behavior về Observable

  constructor() { }

  //function share chi tiet phim
  sharingChiTietPhim(phim) {
    this.chiTietPhim.next(phim);
  }


}
 