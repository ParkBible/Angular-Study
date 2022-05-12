import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiResultComponent } from './poi-result.component';

describe('PoiResultComponent', () => {
  let component: PoiResultComponent;
  let fixture: ComponentFixture<PoiResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoiResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
