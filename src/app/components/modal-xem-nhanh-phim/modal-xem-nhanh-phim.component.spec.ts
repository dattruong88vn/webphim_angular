import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalXemNhanhPhimComponent } from './modal-xem-nhanh-phim.component';

describe('ModalXemNhanhPhimComponent', () => {
  let component: ModalXemNhanhPhimComponent;
  let fixture: ComponentFixture<ModalXemNhanhPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalXemNhanhPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalXemNhanhPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
