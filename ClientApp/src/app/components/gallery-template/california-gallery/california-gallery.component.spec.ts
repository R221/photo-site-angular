import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniaGalleryComponent } from './california-gallery.component';

describe('CaliforniaGalleryComponent', () => {
  let component: CaliforniaGalleryComponent;
  let fixture: ComponentFixture<CaliforniaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliforniaGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliforniaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
