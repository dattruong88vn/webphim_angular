import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongDatVeComponent } from './phong-dat-ve.component';

describe('PhongDatVeComponent', () => {
  let component: PhongDatVeComponent;
  let fixture: ComponentFixture<PhongDatVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhongDatVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongDatVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
