import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShareStoreService } from 'src/app/core/shared/share-store.service';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {
  singlePhimFromShareStore = {};
  trailerLink = '';
  status = false;

  constructor(
    private shareStroreService: ShareStoreService,
  ){ }

  ngOnInit() {
    this.shareStroreService.shareChiTietPhim.subscribe((data: any) => {
      this.singlePhimFromShareStore = data;
      this.status = this.loading(data.Trailer);
    })
  }

  loading(data: string): boolean {
    if (data === undefined) {
      return false;
    }
    else {
      this.trailerLink = 'https://www.youtube.com/embed/' +  data.slice(32);
      return true;
    }
  }

  stopTrailer() {
    this.trailerLink = '';
  }

}
