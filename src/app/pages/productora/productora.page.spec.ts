import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoraPage } from './productora.page';

describe('PageComponent', () => {
  let component: ProductoraPage;
  let fixture: ComponentFixture<ProductoraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoraPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
