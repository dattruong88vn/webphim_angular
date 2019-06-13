import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietSinglePhimComponent } from './chi-tiet-single-phim.component';

describe('ChiTietSinglePhimComponent', () => {
  let component: ChiTietSinglePhimComponent;
  let fixture: ComponentFixture<ChiTietSinglePhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietSinglePhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietSinglePhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
