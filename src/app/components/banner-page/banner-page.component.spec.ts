import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPageComponent } from './banner-page.component';

describe('BannerPageComponent', () => {
  let component: BannerPageComponent;
  let fixture: ComponentFixture<BannerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
